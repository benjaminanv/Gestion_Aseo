import { salas } from '../data/salas'

function ListaSalas() {
  return (
    <div>
      {salas.map((sala) => (
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