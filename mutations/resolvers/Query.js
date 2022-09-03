const { usuarios, Perfis } =  require("../data/db");

module.exports = {
    usuarios() {
        return usuarios
    },
    usuario(_, {
        id
    }) {
        const selecionados = usuarios.filter(u => u.id === id)
        return selecionados ? selecionados[0] : null
    },
    perfis() {
        return Perfis;
    },
    perfil(_, {
        id
    }) {
        const allPerfil = Perfis.filter(val => val.id == id)
        return allPerfil ? allPerfil[0] : null
    }
}