import express from "express";
import dadoController from "../controllers/dadosController.js"


const router = express.Router();

let rotas = router
    .get("/mostrar", dadoController.mostrarDado)
    .post("/adicionar", dadoController.adicionarDado)
    // .delete("/deletar", )

export default rotas;