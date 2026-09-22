import { Trabajador } from '../data/trabajador'

function TrabajadorTag({ idTrabajador }) {
  const trabajador = Trabajador.find((t) => t.idTrabajador === idTrabajador)

  if (!trabajador) return null

  return (
    <span className="trabajador-tag">
  {idTrabajador}
      <span className="trabajador-tooltip">
        <strong>{trabajador.nombre}</strong>
        <br />
        Turno: {trabajador.inicioturno} - {trabajador.finturno}
      </span>
    </span>
  )
}


export default TrabajadorTag