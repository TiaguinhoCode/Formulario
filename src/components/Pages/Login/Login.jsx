import { useState } from 'react';
import contato from '../../../assets/contato.png'
import { LayoutComponents } from '../../LayoutComponents/LayoutComponents';
import { Link } from 'react-router-dom';
import Header from '../../Menu/Header';


export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
      <>
      <Header />
      <main className="main">
      <LayoutComponents>
            <form className="login-form">
              <span className="login-form-title">Login Usuario</span>
              <span className="login-form-title">
              <img src={contato} alt='login'/> 
            </span>

            <div className='wrap-input'>
              <input 
              className={email !== "" ? 'has-val input' : 'input' }
              stype='text' 
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Usuário'></span>
            </div>

            <div className='wrap-input'>
              <input 
              className={password !== "" ? 'has-val input' : 'input' } 
              type='password' 
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Senha'></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Login</button>
            </div>

            <div className='text-center'>
              <span className='txt1'>Não possui Cadastro?</span>

              <Link className='txt2' to="/registro">
                Criar Cadastro</Link>
            </div>

          </form>
          </LayoutComponents>
          </main>
          </>
    );
}