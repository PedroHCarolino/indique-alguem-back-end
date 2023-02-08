const { Router } = require('express')
const routs = Router()
const userCrtl = require('../controllers/controllUser')
const atividadeCrtl = require('../controllers/atividadeUser')
const enderecoCrtl = require('../controllers/enderecoUser')



routs.get('/usuarios', userCrtl.getAllUser);
routs.get('/usuarios/search', userCrtl.getUserByProfission);
routs.post('/usuarios', userCrtl.createUser);
routs.post('/usuarios/auth', userCrtl.authUser);
routs.put('/usuarios/:id', userCrtl.updateUser);
routs.get('/usuarios/:id', userCrtl.getUniqueUser);
routs.delete('/usuarios/:id', userCrtl.deleteUser);

routs.get('/usuarios/atividades/:id', atividadeCrtl.getAllUsuarios);
routs.get('/usuarios/profissao/:atividade', atividadeCrtl.getAllUsuariosByAtividade);

routs.get('/endereco', enderecoCrtl.getEndereco)
routs.get('/endereco/:id', enderecoCrtl.getUniqueEndereco)
routs.post('/endereco/', enderecoCrtl.criarEndereco)
routs.put('/endereco/:id', enderecoCrtl.atualizarEndereco)
routs.delete('/endereco/:id', enderecoCrtl.deletarEndereco)

module.exports = routs