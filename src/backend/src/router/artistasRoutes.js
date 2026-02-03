import { Router } from 'express';
import artistasController from '../controllers/artistasController.js';

const router = Router();

// Rotas de Artistas
router.get('/', artistasController.index); 
router.get('/:id', artistasController.show);
router.post('/', artistasController.create);
router.put('/:id', artistasController.update);
router.delete('/:id', artistasController.delete);

export default router;