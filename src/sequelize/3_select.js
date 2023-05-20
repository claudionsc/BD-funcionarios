const { funcao, pessoas } = require('../models')
const models = require('../models')

async function select(){
    console.log('\n')

    const pessoas = await models.pessoas.findAll()
    pessoas.forEach((pessoas) => {
        // console.log(`Pessoas: ${pessoas.nome}`)
    })

    const funcaos = await models.funcoes.findAll()
    funcaos.forEach((funcaos) => {
        // console.log(`Funções:${funcaos.nome}`)
    })

    const funcoesPessoas = await models.pessoas.findAll({
        include: [
            {
                model: models.funcoes
            }
        ]
    })

    const array = [];
    
    funcoesPessoas.forEach((pessoas) => {

        function Funcoes(){
            let fun = []
            pessoas.funcaos.forEach((funcao) => {
             let arr = fun.push(funcao.nome)
            })
            return fun
        }

        const map = {
            Nome: pessoas.nome,
            Função: Funcoes(),
            Salario: pessoas.salario
        }
        
       array.push(map)

       
    })
    console.table(array)
}
select()