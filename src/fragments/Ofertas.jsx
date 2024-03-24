import React, { useEffect, useState } from 'react'
import '../style/Ofertas.css'
import Etiquetas from './Etiquetas'

export default function Ofertas({ etiquetasSeleccionadas, opcionesBusqueda, etiquetas }) {


    const [ofertas, setOfertas] = useState([])

    /*useEffect(() => {
        fetch('https://jobs.github.com/positions.json')
            .then(response => response.json())
            .then(data => setOfertas(data))
    }, [])
    */

    //Ver oferta tendria que ser otra pagina con solo la informacion de esa oferta  
    return (
        <div className="seccion-ofertas">
            {ofertas.map((oferta) => {
                if (oferta.estado == 'Activa') {
                    return (
                        <div className="border">
                            <div key={oferta.id} className="oferta">
                                <h3>{oferta.titulo}</h3>
                                <p>{oferta.descripcion}</p>
                                <p>{oferta.fecha_publicacion}</p>
                                <a href={oferta.Usuario} target="_blank" rel="noreferrer">Usuario</a>
                                <a>Ver oferta</a> 
                                <ul className='secion-etiquetas-oferta'>
                                    {oferta.tags.map((tag) => {
                                        return (
                                            <li>{tag.nombre}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    )
}