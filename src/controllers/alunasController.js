const alunas = require('../model/alunas.json')

exports.get = (req, res) => {//responsável por chamar as alunas ou o arquivo alunas
    console.log(req.url)
    res.status(200).send(alunas)
}

exports.getById = (request, res) => {
    const id = request.params.id
    console.log(id)
    const alunaId = (alunas.find(aluna => aluna.id == id))

    if (!alunaId) {
        res.redirect(301, "https://www.uol.com.br/")
        //res.send('no exist')
    }
    //res.status(200).send(alunas.find(aluna => aluna.id == id))
    res.send(alunaId)
}

exports.getBooks = (request, res) => {
    const id = request.params.id//chamar a id da aluna
    const aluna = alunas.find(aluna => aluna.id == id)

    if (!aluna) {// se não tiver id aluna
        res.send('Not found')
    }

    res.send(aluna)

    const livros = aluna.livros
    const livrosDaAluna = livros.map(livro => livro.titulo)
    const livrosLidos = livrosDaAluna.filter(livro => livro.leu == "true")

    //const livrosLidos = liv
    res.status(200).send(livrosDaAluna)
    //console.log(livrosDaAline)
}

exports.getSp = (req, res) => {
    const sp = alunas.filter(aluna => aluna.nasceuEmSp == "true")
    //const alunaSp = alunas.find(item => item.nasceuEmSp == "true")
    const nomeAlunaSp = sp.map(aluna => aluna.nome)
    res.status(200).send(nomeAlunaSp)

}