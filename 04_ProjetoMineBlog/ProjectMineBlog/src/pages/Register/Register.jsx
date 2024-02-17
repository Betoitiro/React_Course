import styles from './Register.module.css';
import { useState } from 'react';

const Register = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setError("")
        const user ={
            displayName,
            email,
            password
        }

        if(password !== confirmPassword){
            setError("As senhas precisam ser iguais!!")
            return;
        }

        console.log(user)
    };

    /*
    const handleDisplayNameChange = (e) => {
        setDisplayName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    */

    return (
        <div className={styles.register}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie o seu usuário e compartilhe seus momentos!!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayname"
                        required
                        placeholder="Nome do usuário"
                        value={displayName}
                        onChange={(e) =>setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email do usuário"
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Senha do usuário"
                        value={password}
                        onChange={(e) =>setPassword(e.target.value)}
                        
                    />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirme a sua senha"
                        value={confirmPassword}
                        onChange={(e) =>setConfirmPassword(e.target.value)}

                    />
                </label>
                <button className="btn" type="submit">
                    Cadastrar
                </button>
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    );
};

export default Register; 