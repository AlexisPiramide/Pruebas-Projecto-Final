import "../style/Etiquetas.css"
import { useState, useEffect } from "react";
import ContenedorEtiquetas from "./ContenedorEtiquetas";
import OpcionesEtiquetas from "./OpcionesEtiquetas";

export default function Etiquetas({ etiquetas, etiquetasSeleccionadas, setEtiquetasSeleccionadas, setOpcionesBusqueda }) {

    const [escodidas,setEscondidas] = useState(false);

    useEffect(() => {
        console.log(etiquetasSeleccionadas)
    },[etiquetasSeleccionadas])

    return (
        <div className="secion-etiquetas">
            <div>
                <input className="search-bar" type="text" placeholder="Buscar ofertas..." />
                <button className="boton-esconder" onClick={()=>setEscondidas(!escodidas)}>{escodidas?'Esconder Etiquetas':'Mostrar Etiquetas'}</button>
            </div>
            <div className={escodidas ? 'hidden' : 'visible'}>
                <ContenedorEtiquetas etiquetas={etiquetas}  etiquetasSeleccionadas={etiquetasSeleccionadas} setEtiquetasSeleccionadas={setEtiquetasSeleccionadas}/>
                <OpcionesEtiquetas setOpcionesBusqueda={setOpcionesBusqueda}/>
            </div>
        </div>
    )
} 
