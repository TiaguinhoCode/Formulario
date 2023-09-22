import { LayoutComponents } from "../../components/LayoutComponents/LayoutComponents"
import { useState } from 'react';
import contato from '../../assets/contato.png'
import { Link } from 'react-router-dom';

export const Register = () => {

    const [name, setName ] = useState("")
    const [email, setEmail ] = useState("")
    const [password, setPassword] = useState("")

    return (
        <LayoutComponents>
            <form className="login-form">
              <span className="login-form-title">Criar Cadastro</span>
              <span className="login-form-title">
              <img src={contato} alt='login'/> 
            </span>

            <div className='wrap-input'>
              <input 
              className={name !== "" ? 'has-val input' : 'input' }
              stype='name' 
              value={name}
              onChange={e => setName(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Nome'></span>
            </div>

            <div className='wrap-input'>
              <input 
              className={email !== "" ? 'has-val input' : 'input' }
              stype='name' 
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
              <button className='login-form-btn'> Login</button>
            </div>

            <div className='text-center'>
              <span className='txt1'>Já possui Cadastro?</span>

              <Link className='txt2' to="/logar">
                Acessar Cadastro</Link>
            </div>

          </form>
        </LayoutComponents>
    )
}