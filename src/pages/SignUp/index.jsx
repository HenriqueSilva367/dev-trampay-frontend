import { useState } from "react";
import Logo from '../../assets/logo.svg';
import bg from "../../assets/bg.svg";
import EyeOff from '../../assets/eye-off.svg';
import Eye from '../../assets/eye.svg';
import "./style.css";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function SignUp() {

  const [showPassword, setShowPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  
  const navigate = useNavigate();
  
  async function hendleSubmitted(event){
    event.preventDefault();

    try {
      if(!email) return window.alert('Você deve informar o campo Email');
      if (!showPassword) return window.alert('Você deve informar o campo Senha');
      if (showPassword != confirmationPassword) return window.alert('As senhas não conferem');
      if(showPassword.length < 8) return window.alert('A senha dever ser maior que 8 caracteres');
      await api.post('/user', {
        name: name, 
        email: email,
        password: showPassword,
      });

      
      navigate('/')
    } catch (error) {
      console.log(error);
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
              <label htmlFor="name">Nome</label>
              <input 
                id="name" 
                type="name" 
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome" 
                required
              />
            </div>
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
            <label htmlFor="email">Senha</label>
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
            <div className="input-wrapper">
            <label htmlFor="email">Confirmação senha</label>
              <input
                 type={isRevealPwd ? 'password' : 'text'}
                 value={confirmationPassword}
                 onChange={(e) => setConfirmationPassword(e.target.value)} 
                id="senha"
                placeholder="Digite sua senha"
              />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </main>
      </div>
      
        <img src={bg} alt="background" />
      
    </div>
  );
}

export default SignUp;
