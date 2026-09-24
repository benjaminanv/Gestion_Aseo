import { useState } from 'react'
import ListaSalas from './components/ListaSalas'
import Login from './components/Login'



function App() {
  const [usuarioActual, setUsuarioActual] = useState(null)

  if (!usuarioActual) {
    return <Login onIniciarSesion={setUsuarioActual} />
  }

  return (
    <div>
      <ListaSalas usuarioActual={usuarioActual} onCerrarSesion={() => setUsuarioActual(null)} />
    </div>
  )
}
export default App