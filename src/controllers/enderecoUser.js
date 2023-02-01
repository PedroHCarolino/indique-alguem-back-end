const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getEndereco = async (req, res) => {
  const endereco = await prisma.enderecos.findMany({})
  res.send(endereco)
}

const getUniqueEndereco = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const resultado = await prisma.enderecos.findUnique({ where: {id} });
    res.send(resultado)
  } catch (err) {
    console.log(err)
  }
}

const criarEndereco = async (req, res) => {
  try {
    const data = req.body
    const endereco = await prisma.enderecos.create({data})
    res.send(endereco)
  } catch (err) {
    console.log(err)
  }
}

const atualizarEndereco = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const resultado = await prisma.enderecos.update({ where: {id}, data});
    res.send(resultado)
  } catch (err) {
    console.log(err)
  }
}
const deletarEndereco = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const resultado = await prisma.enderecos.delete({ where: {id}});
    res.send(resultado)
  } catch (err) {
    console.log(err)
  }
}



module.exports = {
  getEndereco,
  getUniqueEndereco,
  criarEndereco,
  atualizarEndereco,
  deletarEndereco
}