const alunas = require('../model/alunas.json')

exports.get = (req, res) => {//responsável por chamar as alunas ou o arquivo alunas
    console.log(req.url)
    res.status(200).send(alunas)
}

exports.getById = (request, res) => {
    const id = request.params.id
    console.log(id)
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}