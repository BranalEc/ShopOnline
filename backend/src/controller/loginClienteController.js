import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import clienteModel from "../models/cliente.js";
import { config } from "../../config.js";

const loginClienteController = {};

loginClienteController.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Buscar al cliente en la base de datos
    const clientFound = await clienteModel.findOne({ email });
    if (!clientFound) {
      return res.status(404).json({ message: "Client not found" });
    }

    // 2. Validación de verificación de correo (isVerified del PDF)
    if (clientFound.isVerified === false) {
      return res.status(403).json({ message: "Por favor, verifica tu correo antes de iniciar sesión." });
    }

    // 3. Validación de estado de cuenta (status del PDF)
    if (clientFound.status === false) {
      return res.status(403).json({ message: "Esta cuenta se encuentra inactiva o deshabilitada." });
    }

    // 4. Validación de bloqueo temporal por fuerza bruta
    if (clientFound.timeOut && clientFound.timeOut > Date.now()) {
      return res.status(403).json({ message: "Cuenta bloqueada temporalmente" });
    }

    // 5. Comparar contraseñas
    const isMatch = await bcrypt.compare(password, clientFound.password);

    if (!isMatch) {
      // Sumar intento fallido
      clientFound.loginAttempts = (clientFound.loginAttempts || 0) + 1;

      // Penalización: Bloqueo de 15 minutos tras 5 fallos
      if (clientFound.loginAttempts >= 5) {
        clientFound.timeOut = Date.now() + 15 * 60 * 1000;
        clientFound.loginAttempts = 0;

        await clientFound.save();
        return res.status(403).json({ message: "Cuenta bloqueada" });
      }

      await clientFound.save();
      return res.status(403).json({ message: "Contraseña incorrecta" });
    }

    // Login correcto: Limpiar intentos fallidos y bloqueos pasados
    clientFound.loginAttempts = 0;
    clientFound.timeOut = null;
    await clientFound.save();

    // Generar el token correspondiente a un CLIENTE
    const token = jsonwebtoken.sign(
      { id: clientFound._id, userType: "client" },
      config.JWT.secret,
      { expiresIn: "30d" }
    );

    // Guardar token en la cookie del navegador
    res.cookie("authCookie", token);

    return res.status(200).json({ message: "Login exitoso" });
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default loginClienteController;