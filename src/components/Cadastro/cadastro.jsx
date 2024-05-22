import React, { useState } from 'react';
import './cadastro.css'; // Arquivo CSS para estilos adicionais, se necessário

const Cadastro = () => {
  const [showCadastro, setShowCadastro] = useState(false);

  const toggleCadastro = () => {
    setShowCadastro(!showCadastro);
  };

  return (
    <div>
      <div className={`overlay ${showCadastro ? 'show' : ''}`} onClick={toggleCadastro}></div>
      <div className={`cadastro-container ${showCadastro ? 'show' : ''}`}>
        <h2>Cadastro</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
