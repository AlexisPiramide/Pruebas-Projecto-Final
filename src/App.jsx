import { useEffect, useState } from 'react'
import Etiquetas from './fragments/Etiquetas'
import Ofertas from './fragments/Ofertas'
import './App.css'
import {getEtiquetas} from './services/etiquetas'

function App() {

  const ejemplos = [
    {id: 1, nombre: "FRONT"},
    {id: 2, nombre: "BACK"},
    {id: 3, nombre: "FULLSTACK"},
    {id: 4, nombre: "UI/UX Designer"},
    {id: 5, nombre: "DevOps Engineer"},
    {id: 6, nombre: "Data Scientist"},
    {id: 7, nombre: "Quality Assurance Engineer"},
    {id: 8, nombre: "Mobile App Developer"},
    {id: 9, nombre: "Game Developer"},
    {id: 10, nombre: "Network Engineer"},
    {id: 11, nombre: "System Administrator"},
    {id: 12, nombre: "Cloud Architect"},
    {id: 13, nombre: "Machine Learning Engineer"}
  ]
  
  useEffect(() => {
    //setEtiquetas(getEtiquetas());
  }, [])

  const [etiquetas, setEtiquetas] = useState(ejemplos);
  const [etiquetasSeleccionadas, setEtiquetasSeleccionadas] = useState([])
  const [opcionesBusqueda, setOpcionesBusqueda] = useState()


  return (
    <>
      <Etiquetas etiquetas={etiquetas} etiquetasSeleccionadas={etiquetasSeleccionadas} setEtiquetasSeleccionadas={setEtiquetasSeleccionadas} setOpcionesBusqueda={setOpcionesBusqueda} />
      <Ofertas etiquetasSeleccionadas={etiquetasSeleccionadas} opcionesBusqueda={opcionesBusqueda} />
    </>
  )
}

export default App
