const { funcao, pessoas } = require('../models')
const models = require('../models')

async function select(){
    console.log('\n')

    const pessoas = await models.pessoas.findAll()
    pessoas.forEach((pessoas) => {
        console.log(`Pessoas: ${pessoas.nome}`)
    })

    const funcaos = await models.funcoes.findAll()
    funcaos.forEach((funcaos) => {
        console.log(`Funções:${funcaos.nome}`)
    })

    const funcoesPessoas = await models.pessoas.findAll({
        include: [
            {
                model: models.funcoes
            }
        ]
    })
    funcoesPessoas.forEach((pessoas) => {
        console.log(
            `Nome: ${pessoas.nome}
            Salário: ${pessoas.salario}
        `)
        pessoas.funcaos.forEach((funcao) => {
            console.log(`----> Funções: ${funcao.nome}`)
        })
    })
}
select()