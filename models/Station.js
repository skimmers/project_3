const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Search extends Model {};

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
        trail_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        park_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trail_length: {
            type: DataTypes.DECIMAL(5,1),
            allowNull: false,
        },
        elevation_gain: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fees: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pets_allowed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        trail_map: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trail_img: {
            type: DataTypes.STRING,
            allowNull: false
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
        modelName: 'search'
    },
);

module.exports = Search;