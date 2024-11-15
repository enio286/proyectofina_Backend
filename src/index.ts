// src/index.ts
import express from 'express';
import { sequelize } from './config/database'; // Importar la configuración de la base de datos
import bodyParser from 'body-parser';
import cors from 'cors'; // Importar cors
import clienteRoutes from './routes/clienteRoutes'; // Importar rutas de clientes
import destinoRoutes from './routes/destinoRoutes'; // Importar rutas de destinos
import reservaRoutes from './routes/reservaRoutes'; // Importar rutas de reservas
import authRoutes from './routes/authRoutes';
import { setupAssociations } from './models/associations';

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de CORS para permitir el frontend en http://127.0.0.1:4200
app.use(cors({
    origin: 'http://localhost:4200', // Permitir solicitudes desde este origen
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));

app.use(bodyParser.json());
app.use('/api/clientes', clienteRoutes); // Usar rutas de clientes
app.use('/api/destinos', destinoRoutes); // Usar rutas de destinos
app.use('/api/reservas', reservaRoutes); // Usar rutas de reservas
app.use('/api/auth', authRoutes);

// ... Rutas y middleware adicionales ...

// Configurar asociaciones antes de sincronizar
setupAssociations();

// Sincronizar la base de datos y arrancar el servidor
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor de agencia de turismo corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });
