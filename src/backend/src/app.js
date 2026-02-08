const express = require('express');

import homeRoutes from './routes/homeRoutes.js';
import artistasRoutes from './routes/artistasRoutes.js';
import integrantesRoutes from './routes/integrantesRoutes.js';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express. json());
    }
    routes() {
        this.app.use('/', homeRoutes); // Rotas de Início
        this.app.use('/artistas', artistasRoutes); // Rotas de Artistas
        this.app.use('/integrantes', integrantesRoutes); // Rotas de Integrantes
    }
}


export default new App().app;