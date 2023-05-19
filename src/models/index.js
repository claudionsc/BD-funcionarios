const sequelize = require('../config/_database')


const models = {
    pessoas: require('./pessoas'),
    funcoes: require('./funcao'),
    sequelize: sequelize
}


module.exports = models