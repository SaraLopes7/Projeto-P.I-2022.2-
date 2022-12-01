import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './routers/Header'
import Body from './routers/Body'
import Footer from './routers/Footer'
import Login from './routers/Login';
import Cadastro from './routers/Cadastro'
import Contribuir from './routers/Contribuir';
import Cartao from './routers/pagamento/Cartao';
import Pix from './routers/pagamento/Pix';
import Boleto from './routers/pagamento/Boleto';

function App() {
  return (
    <div>
        <Router>
          <header>
            <Header/>
          </header>
          <body>
            <Routes>
              <Route path='/Body' element={<Body/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/Cadastro' element={<Cadastro/>}/>
              <Route path='/Contribuir' element={<Contribuir/>}/>
              <Route path='/Cartao' element={<Cartao/>}/>
              <Route path='/Pix' element={<Pix/>}/>
              <Route path='/Boleto' element={<Boleto/>}/>
            </Routes>
          </body>
          <footer>
            <Footer/>
          </footer>
        </Router>
    </div>
  );
}

export default App;

