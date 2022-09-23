const Sequelize = require('sequelize')
const sequelize = require('../_database')

const Função = sequelize.define('funcao', {
    nome: {
        type: Sequelize.STRING,
        unique: true
    }
})

module.exports = Função

const Pessoas = require('./pessoas')
Função.belongsToMany(Pessoas, {through: 'pessoas_funcao'})