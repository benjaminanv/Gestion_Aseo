import { useState } from 'react'
import { salas as salasIniciales } from '../data/salas'

function formatearFechaHoraActual() {
  const ahora = new Date()
  const dia = String(ahora.getDate()).padStart(2, '0')
  const mes = String(ahora.getMonth() + 1).padStart(2, '0')
  const anio = String(ahora.getFullYear()).slice(-2)
  const horas = String(ahora.getHours()).padStart(2, '0')
  const minutos = String(ahora.getMinutes()).padStart(2, '0')
  return `${dia}-${mes}-${anio} ${horas}:${minutos}`
}

function colorEstado(estado) {
  if (estado === 'limpio') return 'success'
  if (estado === 'pendiente') return 'danger'
  return 'warning'
}
function nombreEstado(estado) {
    if (estado === 'en_proceso') return 'En proceso'
    if (estado === 'limpio') return 'Limpio'
    if (estado === 'pendiente') return 'Pendiente'
    return estado
}
function ListaSalas() {
  const [listaSalas, setListaSalas] = useState(salasIniciales)
  const [pisoActivo, setPisoActivo] = useState(1)
  const [estadoActivo, setEstadoActivo] = useState('todos')
  const [salaSeleccionadaId, setSalaSeleccionadaId] = useState(null)

  const salaSeleccionada = listaSalas.find((s) => s.idSala === salaSeleccionadaId)

  function cambiarEstadoSala(idSala, nuevoEstado) {
    setListaSalas(
      listaSalas.map((sala) =>
        sala.idSala === idSala
          ? {
              ...sala,
              estado: nuevoEstado,
              horaUltimaLimpieza:
                nuevoEstado === 'limpio' ? formatearFechaHoraActual() : sala.horaUltimaLimpieza
            }
          : sala
      )
    )
  }

  const salasFiltradas = listaSalas
    .filter((sala) => sala.piso === pisoActivo)
    .filter((sala) => estadoActivo === 'todos' || sala.estado === estadoActivo)

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Gestión de Aseo</h1>

      <ul className="nav nav-pills justify-content-center mb-3">
        {[1, 2, 3, 4].map((piso) => (
          <li className="nav-item" key={piso}>
            <button
              className={`nav-link ${pisoActivo === piso ? 'active' : ''}`}
              onClick={() => setPisoActivo(piso)}
            >
              Piso {piso}
            </button>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-center gap-2 mb-4">
        <button
          className={`btn btn-sm ${estadoActivo === 'todos' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => setEstadoActivo('todos')}
        >
          Todos
        </button>
        <button
          className={`btn btn-sm ${estadoActivo === 'limpio' ? 'btn-success' : 'btn-outline-success'}`}
          onClick={() => setEstadoActivo('limpio')}
        >
          Limpio
        </button>
        <button
          className={`btn btn-sm ${estadoActivo === 'pendiente' ? 'btn-danger' : 'btn-outline-danger'}`}
          onClick={() => setEstadoActivo('pendiente')}
        >
          Pendiente
        </button>
        <button
          className={`btn btn-sm ${estadoActivo === 'en_proceso' ? 'btn-warning' : 'btn-outline-warning'}`}
          onClick={() => setEstadoActivo('en_proceso')}
        >
          En proceso
        </button>
      </div>

      <div className="row g-3">
        {salasFiltradas.map((sala) => (
          <div className="col-6 col-md-4 col-lg-3" key={sala.idSala}>
            <div
              className="card h-100 shadow-sm"
              role="button"
              onClick={() => setSalaSeleccionadaId(sala.idSala)}
            >
              <div className="card-body text-center">
                <h5 className="card-title">{sala.numero}</h5>
                <span className={`badge bg-${colorEstado(sala.estado)}`}>
                {nombreEstado(sala.estado)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {salasFiltradas.length === 0 && (
        <p className="text-center text-muted mt-4">No hay salas con ese filtro.</p>
      )}

      {salaSeleccionada && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title">Sala {salaSeleccionada.numero}</h5>
                <button className="btn-close" onClick={() => setSalaSeleccionadaId(null)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Piso:</strong> {salaSeleccionada.piso}</p>
                <p>
                  <strong>Estado:</strong>{' '}
                  <span className={`badge bg-${colorEstado(salaSeleccionada.estado)}`}>
                  {nombreEstado(salaSeleccionada.estado)}
                  </span>
                </p>
                <p><strong>Última limpieza:</strong> {salaSeleccionada.horaUltimaLimpieza}</p>
                <p><strong>Trabajadores asignados:</strong> {salaSeleccionada.trabajador.join(', ')}</p>
              </div>
              <div className="modal-footer flex-column">
                <div className="d-flex gap-2 w-100 mb-2">
                  <button
                    className="btn btn-success flex-fill"
                    onClick={() => cambiarEstadoSala(salaSeleccionada.idSala, 'limpio')}
                  >
                    Limpio
                  </button>
                  <button
                    className="btn btn-warning flex-fill"
                    onClick={() => cambiarEstadoSala(salaSeleccionada.idSala, 'en_proceso')}
                  >
                    En proceso
                  </button>
                  <button
                    className="btn btn-danger flex-fill"
                    onClick={() => cambiarEstadoSala(salaSeleccionada.idSala, 'pendiente')}
                  >
                    Pendiente
                  </button>
                </div>
                <button className="btn btn-secondary w-100" onClick={() => setSalaSeleccionadaId(null)}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ListaSalas