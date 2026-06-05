import clienteModel from "../models/cliente.js";
import bcrypt from "bcryptjs";

const clienteController = {};

// Obtener todos los clientes (READ)
clienteController.getAll = async (req, res) => {
  try {
    const clients = await clienteModel.find();
    return res.status(200).json(clients);
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Obtener un cliente único por ID (READ BY ID)
clienteController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await clienteModel.findById(id);
    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    return res.status(200).json(client);
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Modificar datos del cliente (UPDATE)
clienteController.update = async (req, res) => {
  try {
    const { id } = req.params;
    const dataToUpdate = { ...req.body };

    // Si dentro de la actualización se cambia el password, lo re-encriptamos
    if (dataToUpdate.password) {
      const salt = await bcrypt.genSalt(10);
      dataToUpdate.password = await bcrypt.hash(dataToUpdate.password, salt);
    }

    const updatedClient = await clienteModel.findByIdAndUpdate(id, dataToUpdate, { new: true });
    if (!updatedClient) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    return res.status(200).json({ message: "Cliente actualizado con éxito", updatedClient });
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Eliminar definitivamente un cliente (DELETE)
clienteController.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClient = await clienteModel.findByIdAndDelete(id);
    if (!deletedClient) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    return res.status(200).json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default clienteController;