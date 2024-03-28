import "../style/ContenedorEtiquetas.css";

export default function ContenedorEtiquetas({etiquetas,etiquetasSeleccionadas,setEtiquetasSeleccionadas}) {

    
    const selecionarEtiqueta = (e) => {
        e.preventDefault();
        const id = e.target.id;

        if (etiquetasSeleccionadas.includes(id)) {
            
            setEtiquetasSeleccionadas(etiquetasSeleccionadas.filter(etiqueta => etiqueta !== id));
        }else{
            setEtiquetasSeleccionadas([...etiquetasSeleccionadas, id]);
        }
        animacionEtiquetaCss(e.target);
    }

    const animacionEtiquetaCss = (button) => {
        const checkbox = button.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
        button.classList.toggle('checked');
    }

    return (
        <div className="container-tags">
            {etiquetas.map((etiqueta) => (
                <button key={etiqueta.id} id={etiqueta.id} className="tag" type="checkbox" onClick={(e) => (selecionarEtiqueta(e))}>{etiqueta.nombre}<input type="checkbox" /></button>
            ))}
        </div>
    )
}