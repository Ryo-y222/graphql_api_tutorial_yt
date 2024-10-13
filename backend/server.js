const {ApolloServer,gql} =require("apollo-server");

const books = [
  {
    id:1,
    title:"吾輩は猫である",
    author:"夏目漱石",
  },
  {
    id:2,
    title:"走れメロス",
    author:"太宰治",
  },
];

const typeDefs = gql`
  type Book {
    id: Int
    title: String
    author: String
  }

  type Query {
    test: [Book]
  }
`;
const resolvers = {
  Query: {
    test: () => books,
  },
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
  console.log(`Server ready at ${url}`);
});
