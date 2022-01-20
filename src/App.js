import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Experiments from './Experiments';
import "./App.css"


const client = new ApolloClient({
  uri: "http://localhost:4000/"
})


function App() {
  return (
      <ApolloProvider client={client}>
        <Experiments />
      </ApolloProvider>
  );
}

export default App;
