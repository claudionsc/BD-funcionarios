const models = require('./models')

 async function insert() {
    // PESSOAS

    const claudio = await models.pessoas.create({
        nome: 'Claudio Nascimento',
        idade: 26,
        setor: 'fullstack, design, adm',
        salario: 23.000
    })
    const diego = await models.pessoas.create({
        nome: 'Diego Alves',
        idade: 18,
        setor: 'atendimento',
        salario: 1.320
    })
    const diogo = await models.pessoas.create({
        nome: 'Diogo da Silva',
        idade: 18,
        setor: 'atendimento',
        salario: 1.320
    })
    const joanderson = await models.pessoas.create({
        nome: 'Joanderson Alves',
        idade: 18,
        setor: 'frontend',
        salario: 3.500
    })
    const vanessa = await models.pessoas.create({
        nome: 'Vanessa Vieira',
        idade: 23,
        setor: 'adm',
        salario: 23.000
    })
    const carina = await models.pessoas.create({
        nome: 'Carina de Jesus',
        idade: 40,
        setor: 'design',
        salario: 3.000
    })
    const luis = await models.pessoas.create({
        nome: 'Luis Almeida',
        idade: 45,
        setor: 'adm',
        salario: 1.320
    })
    const gabriel = await models.pessoas.create({
        nome: 'Gabriel Alvi',
        idade: 26,
        setor: 'design, adm',
        salario: 23.000
    })

    // FUNÇÕES

    const socio = await models.funcoes.create({
        nome: 'Sócio'
    })
    const adm = await models.funcoes.create({
        nome: 'Administrador'
    })
    const dev = await models.funcoes.create({
        nome: 'Desenvolvedor'
    })
    const atd = await models.funcoes.create({
        nome: 'Atendente'
    })
    const design = await models.funcoes.create({
        nome: 'Designer'
    })

    // RELACIONAIS

    await claudio.setFuncaos([socio, adm, dev])
    await diego.setFuncaos([atd])
    await diogo.setFuncaos([atd])
    await joanderson.setFuncaos([dev])
    await vanessa.setFuncaos([socio, adm])
    await carina.setFuncaos([design])
    await luis.setFuncaos([adm])
    await gabriel.setFuncaos([socio, adm, design])

    console.log('------>INSERIDOS<------')

}
insert()