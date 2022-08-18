
import Header from './components/Header'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Kurs from './pages/Kurs';
import Signup from './pages/Signup';
import Login from './pages/Login';

import {ApolloProvider,ApolloClient,InMemoryCache} from '@apollo/client'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


const client=new ApolloClient({
  uri:'http://localhost:8000/graphql',
  cache:new InMemoryCache()
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kurslar/:id" element={<Kurs />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
