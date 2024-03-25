import React, { useEffect, useState } from 'react'
import '../style/Ofertas.css'
import Etiquetas from './Etiquetas'

export default function Ofertas({ etiquetasSeleccionadas, opcionesBusqueda}) {


    const [ofertas, setOfertas] = useState([])

    useEffect(() => {
        /*fetch('http://localhost:3000/ofertas')
            .then(response => response.json())
            .then(data => setOfertas(data))*/
    }, [])
    

    useEffect(() => {
        /*fetch('http://localhost:3000/ofertas')
            .then(response => response.json())
            .then(data => setOfertas(data))*/
    }, [etiquetasSeleccionadas, opcionesBusqueda])

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
                                <button >{oferta.usuario}</button>
                                <button>Ver oferta</button> 
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