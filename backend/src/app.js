const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());

// em producao
// app.use(cors({origin: 'http://meuapp.com'}));

app.use(express.json());
app.use(routes);

// mostrar as mensagens de erro melhor representadas (codigo 400), e não como erro 500 - problema no servidor
app.use(errors());

module.exports = app;
