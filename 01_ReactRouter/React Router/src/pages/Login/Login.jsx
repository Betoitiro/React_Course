import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Login/LogoMC.png"
import { useState } from 'react';
import Google from '../Login/Imggoogle.png';
import './Login.css';
const Login = () => {
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
        <div className="body">
            <div className="login-container">
                <div className="logo-section">
                    <center>
                        <img src={Logo} alt="LogoMC" className="logo-image" style={{ width: '100px' }} />
                        <h1>Olá! Faça seu login.</h1>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br />
                        <p>
                            Ainda não possui conta? <Link to={"/Cadastro"}>Cadastro</Link>
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
                            <button className='butcad'>
                                <img src={Google} style={{ width: '20px', height: 'auto', marginRight: '10px' }} alt="" />
                                USE O GOOGLE
                            </button>
                            <div>
                                <p>Problemas com o login? <a href="">Solicite ajuda</a> </p>
                            </div>
                        </center>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login