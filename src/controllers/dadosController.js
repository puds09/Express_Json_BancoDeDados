import db from "../dataBase/bancoDeDados.js";

class dadoController {

    static mostrarDado = (req, res) => {
            res.status(200).send(db)
    }

    static adicionarDado = (req, res) => {
        db.push(req.body)
        res.status(200).send(req.body)
    }

}

export default dadoController;
