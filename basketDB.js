const { DataTypes, Sequelize } = require('sequelize')
const User = require("./userDB")
const Product = require("./ProductDB")
require('dotenv').config()

const DataBaseUrl = process.env.DataBaseUrl
const sequelize = new Sequelize(DataBaseUrl, {
  dialect: 'postgres',
})

const Basket = sequelize.define("Basket",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userID:{
        type:DataTypes.STRING,
        allowNull: true
    },
    productID:{
        type:DataTypes.STRING,
        allowNull: true
    },
    count:{
        type:DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
    },
    user_token:{
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    }
})

User.belongsToMany(Product, { through: Basket, onDelete: "CASCADE"});
Product.belongsToMany(User, { through: Basket, onDelete: "CASCADE"});

sequelize.authenticate()
// sequelize.sync()

module.exports = Basket
