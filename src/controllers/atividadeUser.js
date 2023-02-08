const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getAllUsuarios = async (req, res) => {
  const usuarios = await prisma.atividadeOnUsuarios.findMany({
  where: { atividadesProfissionaisId: Number(req.params.id) }, include: {usuarios: true }})
  res.send(usuarios)
}

const getAllUsuariosByAtividade = async (req, res) => {
  const usuarios = await prisma.usuarios.findMany({
  where: { atividadesProfissionais: {atividade: req.params.atividade} }})
  res.send(usuarios)
}

const criarAtividade = async (req, res) => {
  try {
    const data = req.body
    const endereco = await prisma.atividadesProfissionais.create({data})
    res.send(endereco)
  } catch (err) {
    console.log(err)
  }
}

const atualizarAtividade = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const resultado = await prisma.atividadesProfissionais.update({ where: {id}, data});
    res.send(resultado)
  } catch (err) {
    console.log(err)
  }
}
const deletarAtividade = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const resultado = await prisma.atividadesProfissionais.delete({ where: {id}});
    res.send(resultado)
  } catch (err) {
    console.log(err)
  }
}


module.exports = {
  getAllUsuarios,
  getAllUsuariosByAtividade,
  criarAtividade,
  atualizarAtividade,
  deletarAtividade
}