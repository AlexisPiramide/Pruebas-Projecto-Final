

export default function ContenedorEtiquetas({etiquetas,selecionarEtiqueta}) {


    return (
        <div className="container-tags">
            {etiquetas.map((etiqueta) => (
                <button key={etiqueta.id} className="tag" type="checkbox" onClick={(e) => (selecionarEtiqueta(e))}>{etiqueta.nombre}<input type="checkbox" /></button>
            ))}
        </div>
    )
}