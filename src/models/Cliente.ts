import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Cliente extends Model {
    public id!: number;
    public nombre!: string;
    public apellido!: string;
    public email!: string;
    public telefono!: string;
    public pasaporte!: string;
    public eliminado!: boolean;
}

Cliente.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pasaporte: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    eliminado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize,
    tableName: 'clientes',
});

export default Cliente; 