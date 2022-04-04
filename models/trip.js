const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model { };

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        trip_budget: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        traveller_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        traveller_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'traveller',
                key: 'id',
                unique: false
            }
        },
        Location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id',
                unique: false
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'trip'
    }
);

module.exports = Trip;