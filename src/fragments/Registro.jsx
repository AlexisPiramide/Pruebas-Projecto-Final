import  {React, useState } from 'react';
import '../style/LogIn.css';

export default function LogIn() {


    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');

    const iniciarSesion = (e) => {
        e.preventDefault();
        console.log('Iniciando sesion')
        console.log(correo)
        console.log(password)
        console.log(repetirPassword)
    }



    return (
        <main>
            <form>
                <label htmlFor="email">Email</label>
                <div className='campo-formulario'>
                    <img src="https://img.icons8.com/ios/50/000000/lock-2.png" alt="lock" />
                    <input type="email" id="email" name="email" onChange={(e)=> setCorreo(e.target.value)} required />
                </div>
                <label htmlFor="password">Contraseña</label>
                <div className='campo-formulario'>
                    <img src="https://img.icons8.com/ios/50/000000/lock-2.png" alt="lock" />
                    <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)} required />
                </div>
                <label htmlFor="RepetirPassword">Repetir Contraseña</label>
                <div className='campo-formulario'>
                    <img src="https://img.icons8.com/ios/50/000000/lock-2.png" alt="lock" />
                    <input type="password" id="RepetirPassword" name="RepetirPassword" onChange={(e)=> setRepetirPassword(e.target.value)} required />
                </div>
                <button type="submit" onClick={(e)=> iniciarSesion(e)}>Log In</button>
            </form>
        </main>
    )

}