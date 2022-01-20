// NOTE has to be before the requires to make sure the delay is available there
const delayArgument = parseInt(process.argv[2], 10);
global.delay = isNaN(delayArgument) ? 0 : delayArgument;

const { ApolloServer, gql } = require("apollo-server");
const resolvers = require("./resolvers");

const typeDefs = gql`
  type Query {
    experiments(status: String): [Experiment!]
  }

  type Experiment {
    id: ID!
    title: String!
    subtitle: String!
    name: String!
    status: String!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      'editor.cursorShape': 'line'
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
