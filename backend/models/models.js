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
    full_description: {type: DataTypes.STRING(2000)},
    size: {type: DataTypes.REAL},
    floors: {type: DataTypes.INTEGER},
    rooms: {type: DataTypes.INTEGER},
    garage: {type: DataTypes.INTEGER},
    tent: {type: DataTypes.BOOLEAN},
    length: {type: DataTypes.REAL},
    width: {type: DataTypes.REAL},
    material: {type: DataTypes.STRING},
    price: {type: DataTypes.REAL},
    style: {type: DataTypes.STRING},
    type: {type: DataTypes.STRING},
    additional: {type: DataTypes.STRING, defaultValue: null},
    img_title: {type: DataTypes.STRING},
    img_1: {type: DataTypes.STRING, defaultValue: null},
    img_2: {type: DataTypes.STRING, defaultValue: null},
    img_3: {type: DataTypes.STRING, defaultValue: null},
    img_plan1: {type: DataTypes.STRING},
    img_plan2: {type: DataTypes.STRING, defaultValue: null},
    img_plan3: {type: DataTypes.STRING, defaultValue: null}
})

module.exports = {
    User,
    Order,
    House
}