const { usuarios, nextId } = require('../data/db');

function indiceUsuario(filtro) {
    if(!filtro) return -1
    const { id,email } = filtro

    if(id) {
        return usuarios.findIndex(u => u.id === id)

    } else if (email) {
        return usuarios.findIndex(u => u.email === email)
    }
    return -1
}

module.exports = {

    //{ nome,email,idade }) = args
    novoUsuario(_,{ dados }) {

        const validaEmail = usuarios.some(u => u.email === dados.email)

        if(validaEmail) {
            throw new Error('Email ja foi cadastrado')
        }

        const novo =  {
            id: nextId(),
            ...dados,
            perfil_id:1,
            status: 'ATIVO'
        }

        usuarios.push(novo);
        return novo
        
    },

    excluirUsuario(_,{filtro}) {
        const i = indiceUsuario(filtro);

        if(i < 0) return null;

        const excluidos =  usuarios.splice(i,1);

        return excluidos ? excluidos[0] : null;

    },

    alterarUsuario(_, {filtro, dados}) {
        // const i = usuarios.findIndex(u=> u.id === args.id)
        const i = indiceUsuario(filtro);

        if(i< 0) return null;

        const usuario = {
            ...usuarios[i],
            ...dados
        } 

        if(i<0) return null;

        usuarios.splice(i,1,usuario)
        return usuario
    }

}