import express from "express";
import administratorController from "../controller/administradorController.js";

const router = express.Router();

router.route("/")
    .get(administratorController.getAdministrators);

router.route("/:id")
    .put(administratorController.updateAdministrator)
    .delete(administratorController.deleteAdministrator);

export default router;