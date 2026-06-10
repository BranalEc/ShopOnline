import express from "express";
import loginAdministradorController from "../controller/loginAdministradorController.js";

const router = express.Router();

router.route("/").post(loginAdministradorController.login);

export default router;