import administratorModel from "../models/administrador.js";

// Creamos un objeto de funciones
const administratorController = {};

// SELECT
administratorController.getAdministrators = async (req, res) => {
  try {
    const administrators = await administratorModel.find();
    return res.status(200).json(administrators);
  } catch (error) {
    console.log("error " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE
administratorController.deleteAdministrator = async (req, res) => {
  try {
    const deletedAdmin = await administratorModel.findByIdAndDelete(
      req.params.id
    );

    if (!deletedAdmin) {
      return res.status(404).json({ message: "Administrator not found" });
    }

    return res.status(200).json({ message: "Administrator deleted" });
  } catch (error) {
    console.log("error " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// UPDATE
administratorController.updateAdministrator = async (req, res) => {
  try {
    // Solicitamos los datos específicos definidos en el diccionario de datos
    let {
      fullName,
      email,
      password,
      status,
    } = req.body;

    // VALIDACIONES
    // Sanitizar
    fullName = fullName?.trim();
    email = email?.trim();

    // Validar el tamaño del nombre completo (adaptado para soportar nombres y apellidos)
    if (fullName && (fullName.length < 3 || fullName.length > 50)) {
      return res.status(400).json({ message: "Invalid name" });
    }

    // Actualizamos
    const updatedAdmin = await administratorModel.findByIdAndUpdate(
      req.params.id,
      {
        fullName,
        email,
        password,
        status,
      },
      { new: true } // Para que devuelva el documento actualizado
    );

    if (!updatedAdmin) {
      return res.status(404).json({ message: "Administrator not found" });
    }

    return res.status(200).json({ message: "Administrator updated" });
  } catch (error) {
    console.log("error " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default administratorController;