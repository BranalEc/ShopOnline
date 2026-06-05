import nodemailer from "nodemailer";
import crypto from "crypto";
import jsonwebtoken from "jsonwebtoken";
import bcryptjs from "bcryptjs";

// Importamos el modelo de administrador que creamos anteriormente
import administratorModel from "../models/administrador.js";

import { config } from "../../config.js";

const registerAdministratorController = {};

registerAdministratorController.register = async (req, res) => {
    try {
        // Extraemos únicamente los campos de la colección Administrator del PDF
        let {
            fullName,
            email,
            password,
            status
        } = req.body;

        // Verificamos si el correo ya está registrado en administradores
        const existAdmin = await administratorModel.findOne({ email });
        if (existAdmin) {
            return res.status(400).json({ message: "email already in use" });
        }

        // Encriptar la contraseña del administrador
        const passwordHash = await bcryptjs.hash(password, 10);

        // Guardamos el nuevo administrador en la base de datos
        const newAdmin = new administratorModel({
            fullName,
            email,
            password: passwordHash,
            // Si viene el estado en el body lo usa, de lo contrario lo guarda como false (inactivo) hasta que verifique
            status: status !== undefined ? status : false, 
        });

        await newAdmin.save();

        // Generar código aleatorio de verificación
        const verificationCode = crypto.randomBytes(3).toString("hex");

        // Guardamos este código en un token de JWT
        const tokenCode = jsonwebtoken.sign(
            { email, verificationCode },
            config.JWT.secret,
            { expiresIn: "15m" }
        );

        res.cookie("verificationTokenCookie", tokenCode, {
            maxAge: 15 * 60 * 1000,
        });

        // Configurar el envío de correo
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
            subject: "Verificación de cuenta de administrador",
            text:
                "Para verificar tu cuenta de administrador, utiliza este código: " +
                verificationCode +
                " expira en 15 minutos",
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("error" + error);
                return res.status(500).json({ message: "error" });
            }

            res.status(200).json({ message: "email send" });
        });
    } catch (error) {
        console.log("error" + error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

registerAdministratorController.verifyCode = async (req, res) => {
    try {
        const { code } = req.body;

        const token = req.cookies.verificationTokenCookie;

        if (!token) {
            return res.status(401).json({ message: "Token expired or missing" });
        }

        const decoded = jsonwebtoken.verify(token, config.JWT.secret);
        const { email, verificationCode: storedCode } = decoded;

        if (code !== storedCode) {
            return res.status(400).json({ message: "Invalid code" });
        }

        const admin = await administratorModel.findOne({ email });

        if (!admin) {
            return res.status(404).json({ message: "Administrator not found" });
        }

        // Al verificar el código con éxito, cambiamos su status a true (activo)
        admin.status = true; 
        
        // NOTA: Si en tu base de datos final agregaste físicamente la propiedad 'is_verified' 
        // además de 'status', puedes descomentar la siguiente línea:
        // admin.is_verified = true;

        await admin.save();

        res.clearCookie("verificationTokenCookie");

        res.json({ message: "Email verified successfully" });
    } catch (error) {
        console.log("error" + error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default registerAdministratorController;