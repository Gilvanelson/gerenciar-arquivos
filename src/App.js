import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home'
import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Cadastro' element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
