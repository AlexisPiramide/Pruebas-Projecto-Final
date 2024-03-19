import "../style/Etiquetas.css"
import { useState } from "react";

export default function Etiquetas({ etiquetas, etiquetasSeleccionadas, setEtiquetasSeleccionadas, setOpcionesBusqueda }) {

    const [opcionTexto, setOpcionTexto] = useState('Seleciona una opcion de busqueda');

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

    // Esta funcion selecciona las opciones de busqueda
    const seleccionOpciones = (e) => {
        e.preventDefault();
        const opcion = e.target.id;
        let texto = '';
        (opcion == 'exclusiva') ? texto = 'Solo se mostraran ofertas con estas etiquetas' : texto = 'Se mostrarán todas las ofertas con alguna de estas etiquetas';
        setOpcionTexto(texto)
        setOpcionesBusqueda(opcion);
    }

    const esconderEtiquetas = () => {
        
    }

    return (
        <div className="secion-etiquetas">
            <div>
                <input className="search-bar" type="text" placeholder="Buscar ofertas..." />
                <button onClick={esconderEtiquetas}>Esconder Etiquetas</button>
            </div>
            <div className="container-tags">
                {etiquetas.map((etiqueta) => (
                    <button key={etiqueta.id} className="tag" type="checkbox" onClick={(e) => (selecionarEtiqueta(e))}>{etiqueta.nombre}<input type="checkbox" /></button>
                ))}
            </div>
            <div className="opciones-etiquetas">
                <p id='texto-opcion'>{opcionTexto}</p>
                <div>
                    <button id="exclusiva" onClick={(e) => seleccionOpciones(e)}>Busqueda Exclusiva*<input type="radio" name="busqueda" value="exclusiva" /></button>
                    <button id="inclusiva" onClick={(e) => seleccionOpciones(e)}>Busqueda Inclusiva*<input type="radio" name="busqueda" value="inclusiva" /></button>
                </div>
            </div>
        </div>
    )
} 
