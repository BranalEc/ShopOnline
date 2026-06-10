import jsonwebtoken from "jsonwebtoken"; 
import bcrypt from "bcryptjs"; 
import crypto from "crypto"; 
import nodemailer from "nodemailer"; 
import HTMLRecoveryEmail from "../utils/sendMailRecoveryPassword.js";

import { config } from "../../config.js";

// Cambiamos los modelos anteriores por Administrador y Cliente
import administratorModel from "../models/administrador.js"; 
import clienteModel from "../models/cliente.js"; 

const recoveryPasswordController = {};

recoveryPasswordController.requestCode = async (req, res) => {
  try {
    const { email } = req.body;

    // 1. Buscamos primero si es un Administrador
    let userFound = await administratorModel.findOne({ email });
    let userType = "admin";

    // 2. Si no es administrador, buscamos si es Cliente
    if (!userFound) {
      userFound = await clienteModel.findOne({ email });
      userType = "client";
    }

    // 3. Si no es ninguno de los dos, el correo no existe en el sistema
    if (!userFound) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generar el número aleatorio
    const randomCode = crypto.randomBytes(3).toString("hex");

    // Guardamos todo en un token incluyendo el nuevo userType ("admin" o "client")
    const token = jsonwebtoken.sign(
      { email, randomCode, userType: userType, verified: false },
      config.JWT.secret,
      { expiresIn: "15m" } 
    );

    res.cookie("recoveryCookie", token, { maxAge: 15 * 60 * 1000 });

    // Enviar el correo
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.email.user_email,
        pass: config.email.user_password,
      },
    });

    const mailOptions = {
      from: config.email.user_email,
      to: email,
      subject: "Código de recuperación de contraseña",
      text: "Tu código es: " + randomCode + ". Vence en 15 minutos.", 
      html: HTMLRecoveryEmail(randomCode),
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error nodemailer:", error);
        return res.status(500).json({ message: "Error al enviar correo" });
      }
    });

    return res.status(200).json({ message: "Recovery email sent" });
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

recoveryPasswordController.verifyCode = async (req, res) => {
  try {
    const { code } = req.body;
    const token = req.cookies.recoveryCookie;

    if (!token) {
        return res.status(401).json({ message: "Token missing or expired" });
    }

    const decoded = jsonwebtoken.verify(token, config.JWT.secret);

    if (code !== decoded.randomCode) {
      return res.status(400).json({ message: "Invalid code" });
    }

    // Pasamos el userType dinámicamente ("admin" o "client") al nuevo token verificado
    const newToken = jsonwebtoken.sign(
      { email: decoded.email, userType: decoded.userType, verified: true },
      config.JWT.secret,
      { expiresIn: "15m" }
    );

    res.cookie("recoveryCookie", newToken, { maxAge: 15 * 60 * 1000 });

    return res.status(200).json({ message: "Code verified successfully" });
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

recoveryPasswordController.newPassword = async (req, res) => {
  try {
    const { newPassword, confirmNewPassword } = req.body;

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({ message: "Passwords don't match" });
    }

    const token = req.cookies.recoveryCookie;
    if (!token) {
        return res.status(401).json({ message: "Token missing or expired" });
    }

    const decoded = jsonwebtoken.verify(token, config.JWT.secret);

    if (!decoded.verified) {
      return res.status(400).json({ message: "Code not verified" });
    }

    // Encriptar la contraseña
    const passwordHash = await bcrypt.hash(newPassword, 10);

    // ADAPTACIÓN: Elegimos el modelo dinámicamente basándonos en si es "admin" o "client"
    const ModelToUpdate = decoded.userType === "admin" ? administratorModel : clienteModel;

    await ModelToUpdate.findOneAndUpdate(
      { email: decoded.email },
      { password: passwordHash },
      { new: true }
    );

    res.clearCookie("recoveryCookie");

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default recoveryPasswordController;