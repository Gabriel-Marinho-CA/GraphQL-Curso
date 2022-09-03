const { Perfis } = require("../data/db");

module.exports = {
    perfil(usuario) {
        const allPerfil = Perfis.filter(val => val.id == usuario.perfil_id)
        return allPerfil ? allPerfil[0] : null
    }
}