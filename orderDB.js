const { DataTypes, Sequelize } = require('sequelize')
const User = require('./userDB')

const sequelize = new Sequelize('diplomdatabase', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
})

const Order = sequelize.define("Order",{
    inVoiceId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    success :{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false
    },
    orderData:{
        type: DataTypes.JSON,
        allowNull: false,
    },
    user:{
        type: DataTypes.JSON,
        allowNull: false
    },
    prod:{
        type: DataTypes.JSON,
        allowNull: false
    },
    basket:{
        type: DataTypes.JSON,
        allowNull: false
    }
})

sequelize.authenticate()
// sequelize.sync()

module.exports = Order