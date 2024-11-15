import { Request, Response } from 'express';
import Cliente from '../models/Cliente';

class ClienteController {
    public async crear(req: Request, res: Response) {
        const { nombre, apellido, email, telefono, pasaporte } = req.body;
        const cliente = await Cliente.create({ 
            nombre, 
            apellido, 
            email, 
            telefono, 
            pasaporte 
        });
        res.status(201).json(cliente);
    }

    public async obtener(req: Request, res: Response) {
        const clientes = await Cliente.findAll({ 
            where: { eliminado: false },
            include: ['reservas']
        });
        res.json(clientes);
    }

    public async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        const { nombre, apellido, email, telefono, pasaporte, eliminado } = req.body;
        await Cliente.update(
            { nombre, apellido, email, telefono, pasaporte, eliminado }, 
            { where: { id } }
        );
        res.status(204).send();
    }

    public async eliminarAvanzado(req: Request, res: Response) {
        const { id } = req.params;
        await Cliente.update({ eliminado: true }, { where: { id } });
        res.status(204).send();
    }

    public async eliminarDefinitivo(req: Request, res: Response) {
        const { id } = req.params;
        await Cliente.destroy({ where: { id } });
        res.status(204).send();
    }
}

export default new ClienteController(); 