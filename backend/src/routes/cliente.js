import express from "express";
import clienteController from "../controller/clienteController.js";

const router = express.Router();


router.route("/")
    .get(clienteController.getAll);


router.route("/:id")
    .get(clienteController.getById) 
    .put(clienteController.update)
    .delete(clienteController.delete);

export default router;