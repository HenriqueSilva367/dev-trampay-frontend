import { useState } from "react";
import Logo from '../../assets/logo.svg';
import bg from "../../assets/bg.svg";
import EyeOff from '../../assets/eye-off.svg';
import Eye from '../../assets/eye.svg';
import "./style.css";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { setItem } from "../../utils/storage";

function SigIn() {

  const [showPassword, setShowPassword] = useState<string>('');
  const [isRevealPwd, setIsRevealPwd] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  
  const navigate = useNavigate();

  async function hendleSubmitted(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();

    try {
      if(!email) return window.alert('Você deve informar o campo Email');
      if (!showPassword) return window.alert('Você deve informar o campo Senha');

      const response = await api.post('/login', { 
        email: email,
        password: showPassword,
      });

      if (response.status !== 200) return window.alert('Usuário ou Senha não conferem');
      const  token = response.data.access_token;
      
      const result = await api.get(`/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItem('userNome', result.data.name);
      setItem("token", token);
      navigate('/home')
    } catch (error) {
      
    }
  }
  
  return (
    <div id="page" className="flex">
      <div>
        <header>
          <img src={Logo} alt="" />
        </header>
        <main>
          <div className="headline">
            <h1>Acesse a plataforma</h1>
          </div>
          <form onSubmit={hendleSubmitted}>
            <div className="input-wrapper">
              <label htmlFor="email">E-mail</label>
              <input 
                id="email" 
                type="email" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email" 
                required
              />
            </div>

            <div className="input-wrapper">
              <div className="label-wrapper flex">
                <label htmlFor="senha"> Senha </label>
                <a href="#"> Esqueceu a senha? </a>
              </div>

              <input
                 type={isRevealPwd ? 'password' : 'text'}
                 value={showPassword}
                 onChange={(e) => setShowPassword(e.target.value)} 
                id="senha"
                placeholder="Digite sua senha"

              />

              <img
                className="eye"
                alt=""
                title={isRevealPwd ? 'Show password' : 'Hide password'}
                src={isRevealPwd ? EyeOff : Eye}
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
              />
            </div>
            <button type="submit">Entrar</button>

            <div className="create-account">
              Ainda não tem uma conta?
              <Link to="./SignUp">
              <p>
                <strong>Inscreva-se</strong>
              </p>
            </Link>
            </div>
          </form>
        </main>
      </div>
      
        <img src={bg} alt="" />
      
    </div>
  );
}

export default SigIn;
