const models = require('../models')

 async function insert() {
    // PESSOAS

    const pedro = await models.pessoas.create({
        nome: 'Pedro Nascimento',
        idade: 38,
        setor: 'fullstack, design, adm',
        salario: 23000.00.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    })
    const henrique = await models.pessoas.create({
        nome: 'Henrique Alves',
        idade: 18,
        setor: 'atendimento',
        salario: 1320.00.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    })
    const felipe = await models.pessoas.create({
        nome: 'Felipe da Silva',
        idade: 18,
        setor: 'atendimento',
        salario: 1320.00.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    })
    const joanderson = await models.pessoas.create({
        nome: 'Joanderson Almeida',
        idade: 24,
        setor: 'frontend',
        salario: 3500.00.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    })
    const vanessa = await models.pessoas.create({
        nome: 'Vanessa Santana',
        idade: 37,
        setor: 'adm',
        salario: 23000.00.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    })
    const Ana = await models.pessoas.create({
        nome: 'Ana de Jesus',
        idade: 22,
        setor: 'design',
        salario: 3000.00.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    })
    const luis = await models.pessoas.create({
        nome: 'Luis dos Santos Silva',
        idade: 45,
        setor: 'adm',
        salario: 23000.00.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    })
    const gabriel = await models.pessoas.create({
        nome: 'Gabriel Vieira',
        idade: 26,
        setor: 'design, adm',
        salario: 23000.00.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
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

    await pedro.setFuncaos([socio, adm, dev])
    await henrique.setFuncaos([atd])
    await felipe.setFuncaos([atd])
    await joanderson.setFuncaos([dev])
    await vanessa.setFuncaos([socio, adm])
    await Ana.setFuncaos([design])
    await luis.setFuncaos([adm])
    await gabriel.setFuncaos([socio, adm, design])

    console.log('------>INSERIDOS<------')

}
insert()