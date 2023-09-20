import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'tailwindcss/tailwind.css';

import Home from '././template/Home/Home'
import Produtos from './template/Produto/Produtos'
import Header from "./components/Menu/Header";
import FormHeader from "./components/FormHeader/FormHeader";
import FormContent from "./components/FormContent/FormContent";
import EditProduto from "./template/Produto/Produtos";
import { Formulario } from "./components/forms/formulario";


function App() {
  return (


      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/produto' element={<Produtos/>}/>
          <Route path='/produto/:id' element={<Formulario/>}/>
          
        </Routes>
      </Router>
     

  );
}

export default App;
