import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ExperimentsCards from './ExperimentsCards';
import ExperimentsDetails from './ExperimentsDetails';
import Filters from './Filters';
import Navbar from './Navbar';

import './App.css'

const client = new ApolloClient({
  uri: "https://apolloserver22.herokuapp.com/"
})


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <Filters />
          <Routes>
            <Route path="/" element={<ExperimentsCards />} />
            <Route path="/details" element={<ExperimentsDetails />} />
          </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
