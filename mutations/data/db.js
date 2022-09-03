let id = 1;

function nextId() {
    return id++;
}

const usuarios = [
    {
        id: nextId(),
        nome: 'Rafael',
        idade: 90,
        email: 'kk@gmail',
        perfil_id: 1,
        status:'ATIVO'
    },
    {
        id: nextId(),
        nome: 'Guilherme',
        idade: 99,
        email: 'aa@gmail',
        perfil_id: 2,
        status:'INATIVO'
    },
    {
        id: nextId(),
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
 

module.exports = { usuarios, Perfis, nextId }