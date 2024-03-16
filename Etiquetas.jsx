import "../style/Etiquetas.css"
import "../style/OpcionesEtiquetas.css"

export default function Etiquetas({ etiquetas, etiquetasSeleccionadas, setEtiquetasSeleccionadas, setOpcionesBusqueda}) {

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
        setOpcionesBusqueda(opcion);
    }


    return (
        <div class="secion-etiquetas">
            <input class="search-bar" type="text" placeholder="Buscar ofertas..." />
            <div class="container-tags">
                {etiquetas.map((etiqueta) => (
                    <button key={etiqueta.id} class="tag" type="checkbox" onclick={(e) => (selecionarEtiqueta(e))}>{etiqueta.nombre}<input type="checkbox"/></button>
                ))}
            </div>
            <div class="opciones-etiquetas">
                <button id="exclusiva" onclick={(e)=> seleccionOpciones(e)}>Busqueda Exclusiva*<input type="radio" name="busqueda" value="exclusiva"/></button>
                <button id="inclusiva"  onclick={(e)=> seleccionOpciones(e)}>Busqueda Inclusiva*<input type="radio" name="busqueda" value="inclusiva"/></button>
            </div>
        </div>
    )
} 
