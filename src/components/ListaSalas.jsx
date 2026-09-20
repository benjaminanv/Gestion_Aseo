import { salas } from '../data/salas'

function ListaSalas() {
  return (
    <div>
      <h2>Piso 1</h2>
      {salas.filter((sala) => sala.piso === 1).map((sala) => (
        <div key={sala.idSala}>
          <p>Piso: {sala.piso}</p>
          <p>Estado: {sala.estado}</p>
          <p>Última limpieza: {sala.horaUltimaLimpieza}</p>
          <p>Sala: {sala.numero}</p>
        </div>
      ))}

      <h2>Piso 2</h2>
      {salas.filter((sala) => sala.piso === 2).map((sala) => (
        <div key={sala.idSala}>
          <p>Piso: {sala.piso}</p>
          <p>Estado: {sala.estado}</p>
          <p>Última limpieza: {sala.horaUltimaLimpieza}</p>
          <p>Sala: {sala.numero}</p>
        </div>
      ))}

      <h2>Piso 3</h2>
      {salas.filter((sala) => sala.piso === 3).map((sala) => (
        <div key={sala.idSala}>
          <p>Piso: {sala.piso}</p>
          <p>Estado: {sala.estado}</p>
          <p>Última limpieza: {sala.horaUltimaLimpieza}</p>
          <p>Sala: {sala.numero}</p>
        </div>
      ))}

      <h2>Piso 4</h2>
      {salas.filter((sala) => sala.piso === 4).map((sala) => (
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