import { Schema, model } from "mongoose";

const clienteSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: true, // Cuenta activa por defecto
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false, // Requiere verificación por correo inicialmente
    },
    // Campos extras de control para el Login seguro
    loginAttempts: {
      type: Number,
      default: 0,
    },
    timeOut: {
      type: Date,
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    strict: false, // Mantenemos la flexibilidad de añadir datos dinámicos
  }
);

// Nombre de la colección en la base de datos: 'Clients'
const clienteModel = model("Clients", clienteSchema);
export default clienteModel;