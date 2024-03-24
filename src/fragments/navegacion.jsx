import React, { useEffect, useState } from 'react'
import '../style/Ofertas.css'


export default function Navegacion({sesion}) {

    return (
        <aside>
            <div className="navegacion">
                <h1>Ofertas Empleo</h1>
                <button className="enlace" href="#"><img src="img/home.svg" alt="Pagina Icon"/>Inicio</button>
                <button className="enlace" href="#"><img src="img/pagina.svg" alt="Pagina Icon"/>Ofertas</button>
                <button className="enlace" href="#"><img src="img/oficina.svg" alt="Pagina Icon"/>Empresas</button>
                {sesion?<button className="enlace" href="#"><img src="img/favorito.svg" alt="Pagina Icon"/>Favoritos</button>:''}
                {sesion?<button className="enlace" href="#"><img src="img/tuyas.svg" alt="Pagina Icon"/>Tus Ofertas</button>:''}
            </div>

            <div className="usuario-sesion">
                {sesion?<button className="enlace" href="#">Acceder Sesion</button>:<button class="enlace" href="#">Acceder Sesion</button>}
            </div>
        </aside>
    )
}
