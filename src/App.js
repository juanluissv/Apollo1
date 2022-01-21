import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Experiments from './Experiments';
import "./App.css"


const client = new ApolloClient({
  uri: "https://apolloserver22.herokuapp.com/"
})


function App() {
  return (
      <ApolloProvider client={client}>
        <Experiments />
      </ApolloProvider>
  );
}

export default App;
