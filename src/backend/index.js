require('dotenv').config();
const express = require('express');
const cors = require('cors');

import app from './src/app.js';
import prisma from './prisma/cliente.js';

(async () => {
    try {
        await prisma.$connect();
        console.log('Conectado ao banco de dados com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }

})();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando em  http://localhost:${PORT}`);
});
