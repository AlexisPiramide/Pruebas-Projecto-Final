import { useState } from 'react'

import Navegacion from './fragments/Navegacion'
import PanelOfertas from './fragments/PanelOfertas'
import LogIn from './fragments/LogIn'
import Registro from './fragments/Registro'

function App() {
  const [sesion, setSesion] = useState(false);
  return (
    <>
      <Navegacion sesion={sesion}/>
      <Registro />
    </>
  )
}

export default App
