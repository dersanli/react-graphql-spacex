import './App.css';
import logo from './logo.jpeg';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Launches from './components/Launches';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ display: 'block', margin: 'auto', width: 400 }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
};

export default App;
