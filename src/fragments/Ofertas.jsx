import React, { useEffect, useState } from 'react'
import '../style/Ofertas.css'
import Etiquetas from './Etiquetas'

export default function Ofertas({ etiquetasSeleccionadas, opcionesBusqueda,etiquetas }) {


    const [ofertas, setOfertas] = useState([])

    /*useEffect(() => {
        fetch('https://jobs.github.com/positions.json')
            .then(response => response.json())
            .then(data => setOfertas(data))
    }, [])
    */

    return (
        <div className="seccion-ofertas">
            {ofertas.map((oferta) => {
                return (
                    <div className="border">
                        <div key={index} className="oferta">
                            <h3>{oferta.title}</h3>
                            <p>{oferta.company}</p>
                            <p>{oferta.location}</p>
                            <p>{oferta.type}</p>
                            <a href={oferta.url} target="_blank" rel="noreferrer">Ver oferta</a>
                            <ul className='secion-etiquetas-oferta'>
                                {oferta.tags.map((tag) => {
                                    return (
                                        <li>{tag.nombre}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}