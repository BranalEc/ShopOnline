import bcrypt from "bcryptjs";
import clienteModel from "../models/cliente.js";

const registerClienteController = {};

registerClienteController.register = async (req, res) => {
  try {
    const { fullName, email, password, phoneNumber } = req.body;

    // Verificar duplicados de correo
    const existingClient = await clienteModel.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: "El correo electrónico ya está registrado." });
    }

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Guardar nuevo registro con los estados iniciales
    const newClient = new clienteModel({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
      status: true,
      isVerified: false, // Empieza desverificado para el proceso de correo
    });

    await newClient.save();
    return res.status(201).json({ message: "Cliente registrado exitosamente." });
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default registerClienteController;