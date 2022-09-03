const usuarios = [
    {
        id: 1,
        nome: 'Rafael',
        idade: 90,
        email: 'kk@gmail',
        perfil_id: 1,
        status:'ATIVO'
    },
    {
        id: 2,
        nome: 'Guilherme',
        idade: 99,
        email: 'aa@gmail',
        perfil_id: 2,
        status:'INATIVO'
    },
    {
        id: 3,
        nome: 'Gabriel',
        idade: 99,
        email: 'aa@gmail',
        perfil_id: 1,
        status:'BLOQUEADO'
    }
]
const Perfis = [
    {
        id: 1,
        nome: 'Comum'
    },
    {
        id: 2,
        nome: 'Administrador'
    }
]
 

module.exports = { usuarios, Perfis }