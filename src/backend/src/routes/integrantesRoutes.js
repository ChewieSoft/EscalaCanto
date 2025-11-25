import { Router } from 'express';
import integrantesController from '../controllers/integrantesController.js';

const router = Router();

// Rotas de Artistas
router.get('/', integrantesController.index); 
router.get('/:id', integrantesController.show);
router.post('/', integrantesController.create);
router.put('/:id', integrantesController.update);
router.delete('/:id', integrantesController.delete);

export default router;