import { Formulario } from "./components/forms/formulario";
import 'tailwindcss/tailwind.css';

import Header from "./components/Menu/Header";
import FormHeader from "./components/FormHeader/FormHeader";


function App() {
  return (
    <div id="root"> 
        <Header/> 
        
        <main className="main">
          {/* <Formulario/>  */}
          <FormHeader/>
        </main>
    </div>
  );
}

export default App;
