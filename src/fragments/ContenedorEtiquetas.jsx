import "../style/ContenedorEtiquetas.css";

export default function ContenedorEtiquetas({etiquetas,etiquetasSeleccionadas,setEtiquetasSeleccionadas}) {


    const selecionarEtiqueta = (e) => {
        e.preventDefault();
        const id = e.target.id;
        console.log(e.target)
        console.log(id)

        if (etiquetasSeleccionadas.includes(id)) {
            console.log(0)
            setEtiquetasSeleccionadas(etiquetasSeleccionadas.filter(etiqueta => etiqueta !== id));
        }else{
            console.log(1)
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