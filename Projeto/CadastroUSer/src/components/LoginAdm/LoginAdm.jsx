import React from 'react';
import './LoginAdm.css'
import Logo from './LogoMC.png'
import { useState } from 'react';

const LoginAdm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="logo-section">
        <center>
          <img src={Logo} alt="LogoMC" className="logo-image" style={{width: '100px'}} />
          <h1>Olá! Faça seu login.</h1>
          <br/><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />
          <p>
            Ainda não possui conta? <a href="">Faça seu cadastro</a>
          </p>
        </center>
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Seu E-mail</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password">Sua senha <p className=''></p></label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={handlePasswordChange}
              value={password}
            />
            <a href="/">Esqueceu a senha</a>
          </div>
          <div>
              <input type="submit" value="Enviar" />
          </div>

          <center>
          <div>
            <p>Problemas com o login? <a href="">Solicite ajuda</a> </p>
          </div>
          </center>
        </form>
      </div>
    </div>
  );
};

export default LoginAdm;
