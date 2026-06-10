import bcrypt from "bcryptjs"; // Encriptar
import jsonwebtoken from "jsonwebtoken"; // Token

// Importamos el modelo de administrador
import administratorModel from "../models/administrador.js";

import { config } from "../../config.js";

// Objeto de funciones cambiado a administrador
const loginAdministratorController = {};

loginAdministratorController.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si el correo existe en la bd (usando administratorModel)
    const adminFound = await administratorModel.findOne({ email });

    // Si no lo encuentra
    if (!adminFound) {
      return res.status(404).json({ message: "Administrator not found" });
    }

    // ADAPTACIÓN: Verificar si la cuenta está activa usando el campo 'status' del PDF
    if (adminFound.status === false) {
      return res.status(403).json({ message: "Por favor, verifica tu correo antes de iniciar sesión." });
    }

    // Verificar si la cuenta está bloqueada
    // (Nota: Como tu esquema tiene 'strict: false', guardará estas propiedades dinámicamente sin problema)
    if (adminFound.timeOut && adminFound.timeOut > Date.now()) {
      return res.status(403).json({ message: "Cuenta bloqueada temporalmente" });
    }

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(password, adminFound.password);

    if (!isMatch) {
      // Si se equivoca en la contraseña sumamos 1 a los intentos fallidos
      adminFound.loginAttempts = (adminFound.loginAttempts || 0) + 1;

      // Bloquear la cuenta después de 5 intentos fallidos
      if (adminFound.loginAttempts >= 5) {
        adminFound.timeOut = Date.now() + 15 * 60 * 1000;
        adminFound.loginAttempts = 0;

        await adminFound.save();
        return res.status(403).json({ message: "Cuenta bloqueada" });
      }

      await adminFound.save();

      return res.status(403).json({ message: "Contraseña incorrecta" });
    }

    // Si el login es exitoso, reseteamos los intentos y el bloqueo
    adminFound.loginAttempts = 0;
    adminFound.timeOut = null;
    await adminFound.save();

    // Generar el token (CAMBIO AQUÍ: Cambiamos el userType a "admin")
    const token = jsonwebtoken.sign(
      { id: adminFound._id, userType: "admin" },
      config.JWT.secret,
      { expiresIn: "30d" }
    );

    // Guardamos el token en una cookie
    res.cookie("authCookie", token);

    // ¡Listo!
    return res.status(200).json({ message: "Login exitoso" });
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default loginAdministratorController;