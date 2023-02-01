const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



const getAllUser = async (req, res) => {
  const usuario = await prisma.usuarios.findMany({})
  res.send(usuario)
}

const authUser = async (req, res) => {
  try {
  const { email, password } = req.body
  const usuario = await prisma.usuarios.findFirst(({ where: { AND: [{ email:{contains: email}}, {password:{contains: password}}] } }))
  res.send(usuario)
  } catch (err) {
    console.log(err)
  }
}

const getUniqueUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const resultado = await prisma.usuarios.findUnique({ where: {id} });
    res.send(resultado)
  } catch (err) {
    console.log(err)
  }
}

const createUser = async (req, res) => {
  try {
    const dataNascimento = new Date(req.body.dataNascimento)
    let data = { ...req.body, dataNascimento }
    const usuario = await prisma.usuarios.create({ data })
    res.send(usuario)
  } catch (err) {
    console.log(err)
  }
}

const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const resultado = await prisma.usuarios.update({ where: {id}, data});
    res.send(resultado)
  } catch (err) {
    console.log(err)
  }
}

const deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const resultado = await prisma.usuarios.delete({ where: {id}});
    res.send(resultado)
  } catch (err) {
    console.log(err)
  }
}





module.exports = {
  getAllUser,
  authUser,
  getUniqueUser,
  createUser,
  updateUser,
  deleteUser
}