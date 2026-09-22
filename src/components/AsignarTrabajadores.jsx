function AsignarTrabajadores({ trabajadores, salas, onAlternarTrabajador }) {
    return (
      <div className="row g-3">
        {trabajadores.map((trab) => (
          <div className="col-12 col-md-6" key={trab.idTrabajador}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title mb-1">{trab.nombre}</h5>
                <p className="text-muted small mb-3">
                  Turno: {trab.inicioturno} - {trab.finturno}
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {salas.map((sala) => {
                    const estaAsignada = sala.trabajador.includes(trab.idTrabajador)
                    return (
                      <button
                        key={sala.idSala}
                        type="button"
                        className={`btn btn-sm ${estaAsignada ? 'btn-primary' : 'btn-outline-secondary'}`}
                        onClick={() => onAlternarTrabajador(sala.idSala, trab.idTrabajador)}
                      >
                        {sala.numero}
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