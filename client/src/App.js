import './App.css';
import logo from './logo.jpeg';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ display: 'block', margin: 'auto', width: 400 }}
          />
          <Routes>
            <Route path="/" element={<Launches />} />
            <Route path="/launch/:flight_number" element={<Launch />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
