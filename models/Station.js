const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Station extends Model {};

Station.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        station_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        station_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        open_hours: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        battery_voltage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        network_operator: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'station'
    },
);

module.exports = Station;