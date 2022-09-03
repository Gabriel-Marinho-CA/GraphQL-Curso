 const { ApolloServer, gql } = require("apollo-server");


// Definicao de tipos
const typeDefs = gql`

    # Scalar = forma de tipagem customizada 
    scalar Date
    scalar any

    type User {
        id: ID!
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
        ResolverForaDaQuery: String
    }

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: any
    }

    # Pontos de entrada da API
    type Query {
        hello: String
        HoraCerta: Date
        Usuario: User
        produtoEmDestaque: Produto
    }
`;

// Resolver é tipo uma funcao que recebe varios parametros
const resolvers = {

    User :{
            // Recebe o objeto atual ( parent)
        salario(user) {
            return user.salario_real;
        },
        ResolverForaDaQuery(user) {
            return user.vip;
        }
        
    },

    Produto : {
        precoComDesconto(produto) {
            if(produto.desconto) {
                return (produto.preco - (produto.preco *(produto.desconto/100)))
            } else {
                return 'Produto nao possui desconto'
            }
        }
    },

    Query: {
        hello(){
            return "Hello world!"
        },
        HoraCerta() {
            return new Date();
        },
        Usuario() {
            return {
                id: 1,
                nome: 'Ana da web',
                email: 'gabrielmca@hotmail',
                idade: 32,
                vip: true,
                salario_real: 18949.98789
            }
        },
        produtoEmDestaque() {
            return {
                nome: 'Calça sayajin',
                preco: 100.25,
                desconto: 10
            }
        }
    }
};



const server = new ApolloServer({
    typeDefs,
    resolvers 
})
  

server.listen().then(({ url }) => {
    console.log("excutando em " + url);
})
