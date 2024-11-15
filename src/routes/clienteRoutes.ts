import { Router } from 'express';
import ClienteController from '../controllers/ClienteController';

const router = Router();

router.post('/', ClienteController.crear);
router.get('/', ClienteController.obtener);
router.put('/:id', ClienteController.actualizar);
router.delete('/:id', ClienteController.eliminarDefinitivo);

export default router; 