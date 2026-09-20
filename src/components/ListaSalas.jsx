import { salas } from '../data/salas'

function ListaSalas() {
  return (
    <div>
      {salas.map((sala) => (
        <div key={sala.idSala}>
          <p>Sala: {sala.numero}</p>
        </div>
      ))}
    </div>
  )
}

export default ListaSalas