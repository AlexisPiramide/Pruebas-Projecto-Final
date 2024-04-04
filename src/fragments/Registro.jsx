import  {React, useState } from 'react';
import '../style/Registro.css';
import emailImage from '../img/email.svg';
import passwordImage from '../img/password.svg';
import usuarioImage from '../img/user.svg';
export default function LogIn() {


    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');
    const [usuario, setUsuario] = useState('');

    const registrar = (e) => {
        e.preventDefault();
        console.log('Registrando usuario')
        console.log(correo)
        console.log(password)
        console.log(repetirPassword)
        console.log(usuario)
    }



    return (
        <main>
            <form>
            <label htmlFor="usuario">Usuario</label>
                <div className='campo-formulario'>
                    <img src={usuarioImage} alt="lock" />
                    <input type="usuario" id="usuario" name="usuario" onChange={(e)=> setUsuario(e.target.value)} required />
                </div>
                <label htmlFor="email">Email</label>
                <div className='campo-formulario'>
                    <img src={emailImage} alt="lock" />
                    <input type="email" id="email" name="email" onChange={(e)=> setCorreo(e.target.value)} required />
                </div>
                <label htmlFor="password">Contraseña</label>
                <div className='campo-formulario'>
                    <img src={passwordImage} alt="lock" />
                    <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)} required />
                </div>
                <label htmlFor="RepetirPassword">Repetir Contraseña</label>
                <div className='campo-formulario'>
                    <img src={passwordImage} alt="lock" />
                    <input type="password" id="RepetirPassword" name="RepetirPassword" onChange={(e)=> setRepetirPassword(e.target.value)} required />
                </div>
                <button type="submit" onClick={(e)=> registrar(e)}>Registra Usuario</button>
            </form>
        </main>
    )

}