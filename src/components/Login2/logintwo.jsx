import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login2/login2.css';


const MainSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleLoginClick = () => {
    // TODO: service login
  }

  const handleSignupClick = () => {
    navigate("/signup")
  }

  return (
    <div>
      <section id='ls-main-section'>
        {/* title */}
        <h1 className='ls-text'>Bem vindo de volta!</h1>
        
      
        {/* email input */}
        <div className='ls-input'>
          <label className='ls-text'>
            Email
          </label>
          <input 
            id='ls-email' 
            type='email' 
            value={email} 
            onChange={handleEmailChange}
          />
        </div>
        {/* password input */}
        <div className='ls-input'>
          <label className='ls-text'>
            Senha
          </label>
          <input 
            id='ls-email' 
            type='email' 
            value={senha} 
            onChange={handleSenhaChange}
          />
        </div>
        {/* keep conected checkbox */}
        <div className='ls-input-checkbox'>
          <input 
            id='ls-keep-conected' 
            type='checkbox'
          />
          <p className='ls-text'>
            Mantenha-me conectado
          </p>
        </div>
        {/* access button */}
        <div id='ls-access-btn'>
          <button onClick={handleLoginClick}>
            Acessar
          </button>
        </div>
        {/* register p */}
        <p 
          id='ls-signup-p' 
          className='ls-text'
        >
          Ainda não é colaborador?
          <a onClick={handleSignupClick}> Cadastre-se</a>
        </p>
      </section>
    </div>
  )
}

export default MainSection