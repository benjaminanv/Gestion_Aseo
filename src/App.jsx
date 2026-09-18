import ListaSalas from './components/ListaSalas' 
import { salas } from '../data/salas'
function App() {
  return (
    <div>
      Gestión de Aseo
      <ListaSalas />
    </div>
  )
}
Array.map((elemento)=>(
  <div key={elemento.algunId}>{elemento.algunCampo}</div>
))


export default App
