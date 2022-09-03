const { Perfis,nextId } = require('../data/db');

function filtraPerfil(perfilExcluido) {
    if(!perfilExcluido) return -1;

    const {id , nome} = perfilExcluido

    if(id) {
        return Perfis.findIndex(p => p.id === id)
    } else if (nome) {
        return Perfis.findIndex(p => p.nome === nome)
    }

    return -1
}


module.exports = {
    adicionaPerfil(_,{novoPerfil}) {

        const validaPerfil = Perfis.some(per => per.nome === novoPerfil.nome);

        if(validaPerfil) {
            throw new Error('Perfil já cadastrado');
        }
 
        const perfilNovo = {
            id: nextId(),    
            ...novoPerfil,
        }

        Perfis.push(perfilNovo);

        return perfilNovo
    },

    excluirPerfil(_, {perfilExcluido}) {
       const iPerfil =  filtraPerfil(perfilExcluido)

       const Perfilexcluido =  Perfis.splice(iPerfil,1);

        return Perfilexcluido[0] 
    },

    alteraPerfil(_,{ dados,filtro }) {
        const idx = filtraPerfil(filtro);

        if(idx < 0) return null;


        const perfilAlterado = {
            ...Perfis[idx],
            ...dados
        }

        
        
        if(idx<0) return null;
        
       Perfis.splice(idx,1,perfilAlterado);

        console.log(perfilAlterado)

        return perfilAlterado 

    }
    
}