import Cliente from './Cliente';
import Destino from './Destino';
import Reserva from './Reserva';

// Definir las asociaciones
export const setupAssociations = () => {
    Cliente.hasMany(Reserva, {
        foreignKey: 'cliente_id',
        as: 'reservas'
    });

    Destino.hasMany(Reserva, {
        foreignKey: 'destino_id',
        as: 'reservas'
    });

    Reserva.belongsTo(Cliente, {
        foreignKey: 'cliente_id',
        as: 'cliente'
    });

    Reserva.belongsTo(Destino, {
        foreignKey: 'destino_id',
        as: 'destino'
    });
}; 