const sequelize = require('../_database')


const models = {
    pessoas: require('./pessoas'),
    funcoes: require('./funcao'),
    sequelize: sequelize
}


module.exports = models