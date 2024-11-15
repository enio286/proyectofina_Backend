import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Destino extends Model {
    public id!: number;
    public nombre!: string;
    public descripcion!: string;
    public precio!: number;
    public ubicacion!: string;
    public eliminado!: boolean;
}

Destino.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    eliminado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize,
    tableName: 'destinos',
});

export default Destino; 