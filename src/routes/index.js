import express from "express";
import rotas from "./dados.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("DIR Home");
    })


    app.use(
        express.json(),
        rotas
    )
}

export default routes;