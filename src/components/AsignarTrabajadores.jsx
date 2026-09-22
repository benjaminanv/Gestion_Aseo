function AsignarTrabajadores({ trabajadores, salas, trabajadorSeleccionadoId, onSeleccionarTrabajador, onAlternarTrabajador }) {
    const trabajadorSeleccionado = trabajadores.find((t) => t.idTrabajador === trabajadorSeleccionadoId)
  
    return (
      <div>
        <div className="row g-3 mb-4">
          {trabajadores.map((trab) => (
            <div className="col-6 col-md-4 col-lg-2" key={trab.idTrabajador}>
              <div
                className="card h-100 shadow-sm text-center"
                role="button"
                onClick={() => onSeleccionarTrabajador(trab.idTrabajador)}
              >
                <div className="card-body">
                  <h6 className="mb-0">{trab.nombre}</h6>
                  <small className="text-muted">{trab.inicioturno} - {trab.finturno}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {trabajadorSeleccionado && (
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{trabajadorSeleccionado.nombre}</h5>
              <p className="text-muted small">
                Turno: {trabajadorSeleccionado.inicioturno} - {trabajadorSeleccionado.finturno}
              </p>
  
              {[1, 2, 3, 4].map((piso) => {
                const salasDelPiso = salas.filter((s) => s.piso === piso)
                return (
                  <div key={piso} className="mb-3">
                    <h6 className="text-muted">Piso {piso}</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {salasDelPiso.map((sala) => {
                        const estaAsignada = sala.trabajador.includes(trabajadorSeleccionado.idTrabajador)
                        return (
                          <button
                            key={sala.idSala}
                            type="button"
                            className={`btn btn-sm ${estaAsignada ? 'btn-primary' : 'btn-outline-secondary'}`}
                            onClick={() => onAlternarTrabajador(sala.idSala, trabajadorSeleccionado.idTrabajador)}
                          >
                            {sala.numero}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }
  
  export default AsignarTrabajadores