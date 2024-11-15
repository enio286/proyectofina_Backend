import { Request, Response } from 'express';
import Destino from '../models/Destino';

class DestinoController {
    public async crear(req: Request, res: Response) {
        const { nombre, descripcion, precio, ubicacion } = req.body;
        const destino = await Destino.create({ 
            nombre, 
            descripcion, 
            precio, 
            ubicacion
        });
        res.status(201).json(destino);
    }

    public async obtener(req: Request, res: Response) {
        const destinos = await Destino.findAll({ 
            where: { eliminado: false }
        });
        res.json(destinos);
    }

    public async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        const { nombre, descripcion, precio, ubicacion, eliminado } = req.body;
        await Destino.update(
            { nombre, descripcion, precio, ubicacion, eliminado }, 
            { where: { id } }
        );
        res.status(204).send();
    }

    public async eliminarAvanzado(req: Request, res: Response) {
        const { id } = req.params;
        await Destino.update({ eliminado: true }, { where: { id } });
        res.status(204).send();
    }

    public async eliminarDefinitivo(req: Request, res: Response) {
        const { id } = req.params;
        await Destino.destroy({ where: { id } });
        res.status(204).send();
    }
}

export default new DestinoController(); 