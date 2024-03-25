import { useState } from "react";
import "../style/OpcionesEtiquetas.css";

export default function OpcionesEtiquetas({ setOpcionesBusqueda }) {

    const [opcionTexto, setOpcionTexto] = useState('Seleciona una opcion de busqueda');

    const seleccionOpciones = (e) => {
        e.preventDefault();
        const opcion = e.target.id;
        let texto = '';
        (opcion == 'exclusiva') ? texto = 'Solo se mostraran ofertas con estas etiquetas' : texto = 'Se mostrarán todas las ofertas con alguna de estas etiquetas';
        setOpcionTexto(texto)
        setOpcionesBusqueda(opcion);
    }


    return (
        <div className="opciones-etiquetas">
            <p id='texto-opcion'>{opcionTexto}</p>
            <div>
                <button id="exclusiva" className="opcion" onClick={(e) => seleccionOpciones(e)}>Busqueda Exclusiva<input type="radio" name="busqueda" value="exclusiva" /></button>
                <button id="inclusiva" className="opcion" onClick={(e) => seleccionOpciones(e)}>Busqueda Inclusiva<input type="radio" name="busqueda" value="inclusiva" /></button>
            </div>
        </div>
    )
}