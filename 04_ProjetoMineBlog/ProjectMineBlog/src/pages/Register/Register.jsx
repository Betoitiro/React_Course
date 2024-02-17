import styles from './Register.module.css'

import { useState, useEffect } from 'react'

const Register = () => {

    const[displayname, setDisplaynome] =useState("")

    return (
        <div>
            <h1>Cadastre-se para postar</h1>
            <p>Crie o seu usuario e compartilhe seus momentos!!</p>
            <form>
                <label>
                    <span>Nome:</span>
                    <input type="text"
                        name='displayname'
                        required
                        placeholder='Nome do usuario' />
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email"
                        name='email'
                        required
                        placeholder='email do usuario' />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password"
                        name='password'
                        required
                        placeholder='Senha do usuario' />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input type="password"
                        name='confirmPassword'
                        required
                        placeholder='Confirme a sua senha' />
                </label>
                <button className='bnt'>Cadastrar</button>
            </form>
        </div>
    )
}

export default Register