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

module.exports = {
  getAllUsuarios,
  getAllUsuariosByAtividade
}