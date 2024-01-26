import React from 'react'; // Don't forget to import React
import { Link } from 'react-router-dom';
import Logo from './LogoMc.png';
import Google from './Imggoogle.png';
import './Cadastro.css';

const Cadastro = () => {
    return (
        <div className='body'>
            <form>
                <div className='cabcad'>
                    <center>
                        <img src={Logo} alt="LogoMc" style={{ width: '100px', height: 'auto' }} />
                        <h2>Olá! Faça seu Cadastro.</h2>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <p>Possui uma conta? <Link to={'/Login'}>Ir para Login</Link></p>
                    </center>
                </div>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="E-mail"
                    />
                </div>

                <div>
                    <label htmlFor="name">Nome de usuário</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome de usuário"
                    />
                </div>

                <div>
                    <label htmlFor="password">Insira sua senha</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirme sua senha</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirme sua senha"
                    />
                </div>

                <center>
                    {/**
                     * Cadastro -> Loc
                     * haverá uma rota ligando a tela de localização do usuário!
                     */}
                    <br /><br />
                    <button className='butcad'>
                        <img src={Google} style={{ width: '20px', height: 'auto', marginRight: '10px' }} alt="" />
                        USE O GOOGLE
                    </button>
                </center>
            </form>
        </div>
    );
};

export default Cadastro;
