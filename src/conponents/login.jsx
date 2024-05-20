
import { FaUser, FaLock } from "react-icons/fa";
import "./login.css";
import { useState } from "react";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Enviando os dados para o sistema ' + userName + ' ' + password);
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>

                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <input type="email" placeholder="E-mail" onChange={(e) => setUserName(e.target.value)} />
                    <FaUser className="icon" />
                </div>

                <div className="input-field">
                    <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre-se de mim
                    </label>
                    <a href="#"> Esqueceu a sua senha?</a>
                </div>

                <button type="submit">Entrar</button>
            </form>
            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
            </div>
        </div>
    )
}

export default Login;
