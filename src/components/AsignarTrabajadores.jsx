import { Trabajador } from '../data/trabajador'

function AsignarTrabajadores({ salas, onAlternarTrabajador }) {
  return (
    <div className="row g-3">
      {salas.map((sala) => (
        <div className="col-12 col-md-6" key={sala.idSala}>
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">{sala.numero}</h5>
              <div className="d-flex flex-wrap gap-2">
                {Trabajador.map((trab) => {
                  const estaAsignado = sala.trabajador.includes(trab.idTrabajador)
                  return (
                    <button
                      key={trab.idTrabajador}
                      type="button"
                      className={`btn btn-sm ${estaAsignado ? 'btn-primary' : 'btn-outline-secondary'}`}
                      onClick={() => onAlternarTrabajador(sala.idSala, trab.idTrabajador)}
                    >
                      {trab.nombre}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AsignarTrabajadores