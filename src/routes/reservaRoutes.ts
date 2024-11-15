import { Router } from 'express';
import ReservaController from '../controllers/ReservaController';

const router = Router();

router.post('/', ReservaController.crear);
router.get('/', ReservaController.obtener);
router.put('/:id', ReservaController.actualizar);
router.patch('/:id/estado', ReservaController.cambiarEstado);
router.delete('/:id', ReservaController.eliminarDefinitivo);

export default router; 