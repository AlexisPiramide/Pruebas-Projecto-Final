import { useState } from 'react'

import Navegacion from './fragments/Navegacion'
import PanelOfertas from './fragments/PanelOfertas'

function App() {
  const [sesion, setSesion] = useState(false);
  return (
    <>
      <Navegacion sesion={sesion}/>
      <PanelOfertas />
    </>
  )
}

export default App
