import express from "express";
import loginClienteController from "../controller/loginClienteController.js";

const router = express.Router();

router.route("/").post(loginClienteController.login);

export default router;