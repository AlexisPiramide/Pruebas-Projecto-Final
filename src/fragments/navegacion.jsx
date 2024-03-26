import React, { useEffect, useState } from 'react'
import '../style/Navegacion.css'

import favorito from '../img/favorito.svg'
import home from '../img/home.svg'
import oficina from '../img/oficina.svg'
import pagina from '../img/pagina.svg'
import puerta from '../img/puerta.svg'
import tuyas from '../img/tuyas.svg'
import logo from '../img/logo.png'


export default function Navegacion({sesion}) {

    return (
        <aside>
            <div className="navegacion">
                <img className='logo' src={logo} />
                <button className="enlace" href="#"><img src={home} alt="Pagina Icon"/>Inicio</button>
                <button className="enlace" href="#"><img src={pagina} alt="Pagina Icon"/>Ofertas</button>
                <button className="enlace" href="#"><img src={oficina} alt="Pagina Icon"/>Empresas</button>
                {sesion?<button className="enlace" href="#"><img src={favorito} alt="Pagina Icon"/>Favoritos</button>:''}
                {sesion?<button className="enlace" href="#"><img src={tuyas} alt="Pagina Icon"/>Tus Ofertas</button>:''}
            </div>

            <div className="usuario-sesion">
                {sesion?<button className="enlace" href="#">Acceder Sesion</button>:<button className="enlace" href="#"><img src={puerta} alt="Pagina Icon"/>Acceder Sesion</button>}
            </div>
        </aside>
    )
}
