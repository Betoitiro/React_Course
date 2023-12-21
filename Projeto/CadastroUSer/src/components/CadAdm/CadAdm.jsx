import React, { useState } from 'react';
import './CadAdm.css';
import Logo from './LogoMC.png';
import Google from './Imggoogle.png';

const CadAdm = () => {
    const [name, setName] = useState(''); // Adicionando useState para 'name'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Formulário enviado");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='cabcad'>
                    <center>
                        <img src={Logo} alt="LogoMc" style={{ width: '100px', height: 'auto' }} />
                        <h2>
                            Olá! Faça seu Cadastro.
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <br /><br /><br /><br /><br />
                        </h2>
                        
                        <p>Possui uma conta? <a href="/Login">Ir ao login</a></p>
                    </center>
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleEmail}
                        value={email}
                    />
                </div>

                <div>
                    <label htmlFor="name">Nome de usuário</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome de usuário"
                        onChange={handleName}
                        value={name}
                    />
                </div>

                <div>
                    <label htmlFor="password">Insira sua senha</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        onChange={handlePassword}
                        value={password}
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirme sua senha</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirme sua senha"
                        onChange={handleConfirmPassword} // Corrigido para handleConfirmPassword
                        value={confirmPassword}
                    />
                </div>

                <center>
                    <input type="submit" value="Enviar" />
                    <br /><br />
                    
                </center>
            </form>
        </div>
    )
}

export default CadAdm;
