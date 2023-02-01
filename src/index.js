const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');
const userRoutes = require('./routes/router');

app.use(cors())
app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Origin",
      "*"
    ); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  
app.use(express.json());
app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Serviço executando em: http://127.0.0.1:${PORT}`)
})