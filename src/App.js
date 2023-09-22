import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'tailwindcss/tailwind.css';

import Home from '././template/Home/Home'
import Produtos from './template/Produto/Produtos'
import Header from "./components/Menu/Header";
import FormHeader from "./components/FormHeader/FormHeader";
import FormContent from "./components/FormContent/FormContent";
import EditProduto from "./template/Produto/Produtos";
import { Formulario } from "./components/forms/formulario";
import { AppRouter } from './template/Routes/Routes';
import { Login } from './components/Pages/Login/Login';
import { Register } from './components/Pages/Register/Register';


function App() {
  return (


      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/produto' element={<Produtos/>}/>
          <Route path='/produto/:id' element={<Formulario/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registro' element={<Register/>}/>
          
        </Routes>
      </Router>
     

  );
}

export default App;
