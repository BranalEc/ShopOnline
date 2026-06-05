import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// RUTAS DE ADMINISTRADOR Y CLIENTE
import administratorRoutes from "./src/routes/administrador.js";
import clientRoutes from "./src/routes/cliente.js";
import registerAdministratorRoutes from "./src/routes/registerAdministrador.js";
import registerClientRoutes from "./src/routes/registerCliente.js";
import loginAdministratorRoutes from "./src/routes/loginAdministrador.js";
import loginClientRoutes from "./src/routes/loginCliente.js";

// RUTAS GLOBALES (Mantenidas)
import logoutRoutes from "./src/routes/logout.js";
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js";

const app = express();

// Configuración de CORS
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    // permitir el envio de cookies y credenciales
    credentials: true
}));

app.use(cookieParser());

// Que acepte JSON desde postman/frontend
app.use(express.json());

// RUTAS DE ENTIDADES (CRUD)
app.use("/api/administrators", administratorRoutes);
app.use("/api/clients", clientRoutes);

// RUTAS DE REGISTRO
app.use("/api/registerAdministrator", registerAdministratorRoutes);
app.use("/api/registerClient", registerClientRoutes);

// RUTAS DE AUTENTICACIÓN (LOGIN)
app.use("/api/loginAdministrator", loginAdministratorRoutes);
app.use("/api/loginClient", loginClientRoutes);

// RUTAS DE LOGOUT Y RECUPERACIÓN DE CONTRASEÑA
app.use("/api/logout", logoutRoutes);
app.use("/api/recoveryPassword", recoveryPasswordRoutes);

export default app;