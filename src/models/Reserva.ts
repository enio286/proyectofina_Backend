import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Reserva extends Model {
    public id!: number;
    public cliente_id!: number;
    public destino_id!: number;
    public fecha_inicio!: Date;
    public fecha_fin!: Date;
    public estado!: string;
    public precio_total!: number;
    public eliminado!: boolean;
}

Reserva.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    destino_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'confirmada', 'cancelada'),
        defaultValue: 'pendiente',
    },
    precio_total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    eliminado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize,
    tableName: 'reservas',
});

export default Reserva; 