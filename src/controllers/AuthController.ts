import { Request, Response } from 'express';
import Usuario from '../models/Usuario';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export class AuthController {
    public async register(req: Request, res: Response): Promise<void> {
        try {
            const { email, password, nombre, rol } = req.body;
            const usuario = await Usuario.create({ 
                email, 
                password,
                nombre,
                rol 
            });
            
            const token = jwt.sign(
                { id: usuario.id, email: usuario.email, rol: usuario.rol },
                process.env.JWT_SECRET || 'tu_clave_secreta',
                { expiresIn: '24h' }
            );
            
            res.status(201).json({ token });
        } catch (error) {
            res.status(400).json({ message: 'Error al registrar usuario' });
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const usuario = await Usuario.findOne({ where: { email } });

            if (!usuario) {
                res.status(401).json({ message: 'Credenciales inválidas' });
                return;
            }

            const validPassword = await bcrypt.compare(password, usuario.get('password'));
            
            if (!validPassword) {
                res.status(401).json({ message: 'Credenciales inválidas' });
                return;
            }

            const token = jwt.sign(
                { id: usuario.id, email: usuario.email, rol: usuario.rol },
                process.env.JWT_SECRET || 'tu_clave_secreta',
                { expiresIn: '24h' }
            );

            res.json({ token });
        } catch (error) {
            res.status(400).json({ message: 'Error al iniciar sesión' });
        }
    }
}

export default new AuthController(); 