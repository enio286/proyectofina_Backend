import { Request, Response } from 'express';
import Reserva from '../models/Reserva';

class ReservaController {
    public async crear(req: Request, res: Response) {
        const { cliente_id, destino_id, fecha_inicio, fecha_fin, precio_total } = req.body;
        const reserva = await Reserva.create({ 
            cliente_id, 
            destino_id, 
            fecha_inicio, 
            fecha_fin, 
            precio_total,
            estado: 'pendiente'
        });
        res.status(201).json(reserva);
    }

    public async obtener(req: Request, res: Response) {
        const reservas = await Reserva.findAll({ 
            where: { eliminado: false },
            include: ['cliente', 'destino']
        });
        res.json(reservas);
    }

    public async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        const { cliente_id, destino_id, fecha_inicio, fecha_fin, estado, precio_total, eliminado } = req.body;
        await Reserva.update(
            { cliente_id, destino_id, fecha_inicio, fecha_fin, estado, precio_total, eliminado }, 
            { where: { id } }
        );
        res.status(204).send();
    }

    public async cambiarEstado(req: Request, res: Response) {
        const { id } = req.params;
        const { estado } = req.body;
        await Reserva.update({ estado }, { where: { id } });
        res.status(204).send();
    }

    public async eliminarAvanzado(req: Request, res: Response) {
        const { id } = req.params;
        await Reserva.update({ eliminado: true }, { where: { id } });
        res.status(204).send();
    }

    public async eliminarDefinitivo(req: Request, res: Response) {
        const { id } = req.params;
        await Reserva.destroy({ where: { id } });
        res.status(204).send();
    }
}

export default new ReservaController(); 