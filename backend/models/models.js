const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})
const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fullname: {type: DataTypes.STRING},
    number: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    house_id: {type: DataTypes.INTEGER}
})
const House = sequelize.define('house', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    short_description: {type: DataTypes.STRING},
    full_description: {type: DataTypes.STRING},
    size: {type: DataTypes.FLOAT},
    floors: {type: DataTypes.INTEGER},
    rooms: {type: DataTypes.INTEGER},
    garage: {type: DataTypes.INTEGER},
    tent: {type: DataTypes.BOOLEAN},
    length: {type: DataTypes.FLOAT},
    width: {type: DataTypes.FLOAT},
    material: {type: DataTypes.STRING},
    price: {type: DataTypes.FLOAT},
    style: {type: DataTypes.STRING},
    type: {type: DataTypes.STRING},
    img_title: {type: DataTypes.STRING},
    img_1: {type: DataTypes.STRING},
    img_2: {type: DataTypes.STRING},
    img_3: {type: DataTypes.STRING},
    img_plan: {type: DataTypes.STRING}
})

module.exports = {
    User,
    Order,
    House
}