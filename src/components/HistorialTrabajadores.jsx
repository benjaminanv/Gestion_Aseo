import { Trabajador } from '../data/trabajador'
import { colorEstado, nombreEstado } from '../utils'

function HistorialTrabajadores({ salas }) {
  return (
    <div className="row g-3">
      {Trabajador.map((trabajador) => {
        const salasDelTrabajador = salas.filter((sala) =>
          sala.trabajador.includes(trabajador.idTrabajador)
        )

        return (
          <div className="col-12 col-md-6" key={trabajador.idTrabajador}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{trabajador.nombre}</h5>
                <p className="text-muted mb-2">
                  Turno: {trabajador.inicioturno} - {trabajador.finturno}
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {salasDelTrabajador.map((sala) => (
                    <span
                      key={sala.idSala}
                      className={`badge bg-${colorEstado(sala.estado)}`}
                      title={nombreEstado(sala.estado)}
                    >
                      {sala.numero}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HistorialTrabajadores