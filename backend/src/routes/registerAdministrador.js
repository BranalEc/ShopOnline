import express from "express";
import registerAdministradorController from "../controller/registerAdministradorController.js";

const router = express.Router();

router.route("/")
.post(registerAdministradorController.register);
router.route("/verifyCodeEmail").post(registerAdministradorController.verifyCode);

export default router;