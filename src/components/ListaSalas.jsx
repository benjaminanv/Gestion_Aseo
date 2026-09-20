import { useState } from 'react'
import { salas } from '../data/salas'

function ListaSalas() {
  const [pisoActivo, setPisoActivo] = useState(1)

  return (
    <div>
      <button onClick={() => setPisoActivo(1)}>Piso 1</button>
      <button onClick={() => setPisoActivo(2)}>Piso 2</button>
      <button onClick={() => setPisoActivo(3)}>Piso 3</button>
      <button onClick={() => setPisoActivo(4)}>Piso 4</button>

      <h2>Piso {pisoActivo}</h2>

      {salas.filter((sala) => sala.piso === pisoActivo).map((sala) => (
        <div key={sala.idSala}>
          <p>Piso: {sala.piso}</p>
          <p>Estado: {sala.estado}</p>
          <p>Última limpieza: {sala.horaUltimaLimpieza}</p>
          <p>Sala: {sala.numero}</p>
        </div>
      ))}
    </div>
  )
}

export default ListaSalas