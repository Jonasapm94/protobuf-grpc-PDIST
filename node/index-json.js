const fs = require('fs')
const alunos = []

const aluno1 = {
    id: 1,
    nome: "Jonas",
    idade: 29,
    nota: 5.3
}

const aluno2 = {
    id: 2,
    nome: "Felipe",
    idade: 25,
    nota: 8.4
}

alunos.push(aluno1, aluno2)

console.log(alunos)
const _alunos = JSON.stringify(alunos)
fs.writeFileSync("dados.json", _alunos)