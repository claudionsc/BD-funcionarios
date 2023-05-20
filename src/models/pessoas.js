const Sequelize = require('sequelize')
const sequelize = require('../config/_database')

const Pessoas = sequelize.define('pessoas', {
    nome: {
        type: Sequelize.STRING,
        unique: true        
    },
    idade: {
        type: Sequelize.INTEGER
    },
    setor: {
        type: Sequelize.STRING
    },
    salario: {
        type: Sequelize.STRING
    }
})

module.exports = Pessoas

const Função = require('./funcao')
Pessoas.belongsToMany(Função, {through: 'pessoas_funcao'});