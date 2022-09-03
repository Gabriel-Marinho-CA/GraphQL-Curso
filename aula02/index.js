const {
    ApolloServer,
    gql,
} = require("apollo-server");

const usuarios = [{
        id: 1,
        nome: 'oiCariel',
        idade: 90,
        email: 'kk@gmail'
    },
    {
        id: 2,
        nome: 'hola',
        idade: 99,
        email: 'aa@gmail'
    }
]
const Perfis = [
    {
        id: 1,
        nome: 'Soy Administrador'
    }, 
    {
        id: 2,
        nome: 'Soy COmum'
    } 
]

const typeDefs = gql `

 
    type Perfil {
        id: ID
        nome: String
    }
    type Usuario {
        id: Int
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Query {
        hello:String
        # [! obrigado obrigatoriamente a retornar um INT]! Obriga a retornar um array
        numeroMegaSena: [Int!]!
        usuarios: [Usuario]
        usuario(id: Int): Usuario
        perfis: [Perfil]
        perfil(id: ID) : Perfil
    }
    

`

const resolvers = {
    Query: { 
        hello() {
            return `Ola casadaaa`
        },
        numeroMegaSena() {
            const crescente = (a, b) => a - b
            return Array(6).fill(0)
                .map(n => parseInt(Math.random() * 60 + 1))
                .sort(crescente)
        },
        usuarios() {
            return usuarios
        },
        usuario(_, { id }) {
            const selecionados = usuarios.filter(u => u.id === id)
            return selecionados ? selecionados[0] : null
        },
        perfis() {
            return Perfis;
        },
        perfil(_, { id }) {
           const allPerfil = Perfis.filter(val => val.id == id ) 
            return allPerfil?  allPerfil[0] : null
        }
    }
}



const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({
    url
}) => {
    console.log("excutando em " + url);
})