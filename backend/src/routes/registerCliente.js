import express from "express";
import registerClienteController from "../controller/registerClienteController.js";

const router = express.Router();

router.route("/")
.post(registerClienteController.register);

export default router;