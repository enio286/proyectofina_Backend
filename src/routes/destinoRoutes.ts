import { Router } from 'express';
import DestinoController from '../controllers/DestinoController';

const router = Router();

router.post('/', DestinoController.crear);
router.get('/', DestinoController.obtener);
router.put('/:id', DestinoController.actualizar);
router.delete('/:id', DestinoController.eliminarDefinitivo);

export default router; 