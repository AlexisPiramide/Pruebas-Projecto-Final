import "../style/Etiquetas.css"
import { useState } from "react";
import ContenedorEtiquetas from "./ContenedorEtiquetas";
import OpcionesEtiquetas from "./OpcionesEtiquetas";

export default function Etiquetas({ etiquetas, etiquetasSeleccionadas, setEtiquetasSeleccionadas, setOpcionesBusqueda }) {

    const [escodidas,setEscondidas] = useState(false);

    // Esta funcion filtra las etiquetas seleccionadas y las agrega o quita a las etiquetas selecionadas 
    const selecionarEtiqueta = (e) => {
        e.preventDefault();
        const id = e.target.id;

        const selectedEtiqueta = etiquetas.filter((etiqueta) => etiqueta.id === id);

        if (etiquetasSeleccionadas.includes(selectedEtiqueta)) {
            setEtiquetasSeleccionadas(etiquetasSeleccionadas.filter((etiqueta) => etiqueta.id !== id));
        } else {
            setEtiquetasSeleccionadas([...etiquetasSeleccionadas, selectedEtiqueta]);
        }

        animacionEtiquetaCss(e.target);
    }

    // Esta funcion agrega y quita la animacion a las etiquetas seleccionadas
    const animacionEtiquetaCss = (button) => {
        const checkbox = button.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
        button.classList.toggle('checked');
    }

    return (
        <div className="secion-etiquetas">
            <div>
                <input className="search-bar" type="text" placeholder="Buscar ofertas..." />
                <button onClick={()=>setEscondidas(!escodidas)}>{escodidas?'Esconder Etiquetas':'Mostrar Etiquetas'}</button>
            </div>
            {escodidas?<ContenedorEtiquetas etiquetas={etiquetas} selecionarEtiqueta={selecionarEtiqueta}/>:''}
            {escodidas?<OpcionesEtiquetas/>:''}
        </div>
    )
} 
