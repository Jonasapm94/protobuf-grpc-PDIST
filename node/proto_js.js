const Schema = require("./alunos_pb")
const fs = require('fs')

const jonas = new Schema.Aluno();
jonas.setId(4)
jonas.setNome("Jonas2")
jonas.setIdade(30)
jonas.setNota(9.8)

const felipe = new Schema.Aluno();
felipe.setId(5)
felipe.setNome("Felipe2")
felipe.setIdade(25)
felipe.setNota(9.9)

const alunos = new Schema.Alunos()
alunos.addAlunos(jonas)
alunos.addAlunos(felipe)

const  _alunos = alunos.serializeBinary()
console.log("binario " + _alunos)

fs.writeFileSync('byteProtoJS', _alunos)