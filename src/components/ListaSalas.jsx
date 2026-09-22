import { useState } from 'react'
import { salas as salasIniciales } from '../data/salas'
import { incidencia as incidenciasIniciales } from '../data/incidencia'
import IncidenciasSala from './IncidenciasSala'
import TrabajadorTag from './TrabajadorTag'
import HistorialTrabajadores from './HistorialTrabajadores'
import { colorEstado, nombreEstado } from '../utils'

function formatearFechaHoraActual() {
  const ahora = new Date()
  const dia = String(ahora.getDate()).padStart(2, '0')
  const mes = String(ahora.getMonth() + 1).padStart(2, '0')
  const anio = String(ahora.getFullYear()).slice(-2)
  const horas = String(ahora.getHours()).padStart(2, '0')
  const minutos = String(ahora.getMinutes()).padStart(2, '0')
  return `${dia}-${mes}-${anio} ${horas}:${minutos}`
}

function ListaSalas() {
  const [listaSalas, setListaSalas] = useState(salasIniciales)
  const [pisoActivo, setPisoActivo] = useState(1)
  const [estadoActivo, setEstadoActivo] = useState('todos')
  const [salaSeleccionadaId, setSalaSeleccionadaId] = useState(null)
  const [listaIncidencias, setListaIncidencias] = useState(incidenciasIniciales)
  const [vistaActiva, setVistaActiva] = useState('salas')

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

  function agregarIncidencia(salaId, descripcion) {
    const nuevaIncidencia = {
      idIncidencia: listaIncidencias.length + 1,
      salaId: salaId,
      descripcion: descripcion,
      fecha: formatearFechaHoraActual(),
      estado: 'abierta'
    }
    setListaIncidencias([...listaIncidencias, nuevaIncidencia])
  }

  function cambiarEstadoIncidencia(idIncidencia) {
    setListaIncidencias(
      listaIncidencias.map((inc) =>
        inc.idIncidencia === idIncidencia
          ? { ...inc, estado: inc.estado === 'abierta' ? 'resuelta' : 'abierta' }
          : inc
      )
    )
  }

  const salasFiltradas = listaSalas
    .filter((sala) => sala.piso === pisoActivo)
    .filter((sala) => estadoActivo === 'todos' || sala.estado === estadoActivo)

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center app-title">Gestión de Aseo</h1>

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

      {vistaActiva === 'salas' && (
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
      )}

      <div className="text-center mb-4">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setVistaActiva(vistaActiva === 'salas' ? 'trabajadores' : 'salas')}
        >
          {vistaActiva === 'salas' ? 'Ver historial de trabajadores' : 'Volver a salas'}
        </button>
      </div>

      {vistaActiva === 'salas' ? (
        <>
          <div className="row g-3">
          {salasFiltradas.map((sala) => {
  const tieneIncidenciaAbierta = listaIncidencias.some(
    (inc) => inc.salaId === sala.idSala && inc.estado === 'abierta'
  )

  return (
    <div className="col-6 col-md-4 col-lg-3" key={sala.idSala}>
      <div
        className="card card-sala h-100 shadow-sm position-relative"
        role="button"
        onClick={() => setSalaSeleccionadaId(sala.idSala)}
      >
        {tieneIncidenciaAbierta && (
          <span
            className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger"
            title="Tiene incidencias pendientes"
          >
            !
          </span>
        )}
        <div className="card-body text-center">
          <h5 className="card-title">{sala.numero}</h5>
          <span className={`badge bg-${colorEstado(sala.estado)}`}>
            {nombreEstado(sala.estado)}
          </span>
        </div>
      </div>
    </div>
  )
})}
          </div>

          {salasFiltradas.length === 0 && (
            <p className="text-center text-muted mt-4">No hay salas con ese filtro.</p>
          )}
        </>
      ) : (
        <HistorialTrabajadores salas={listaSalas} />
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
                <p>
                  <strong>Trabajadores asignados:</strong>{' '}
                  {salaSeleccionada.trabajador.map((id) => (
                    <TrabajadorTag key={id} idTrabajador={id} />
                  ))}
                </p>
                <IncidenciasSala
                  incidencias={listaIncidencias.filter((inc) => inc.salaId === salaSeleccionada.idSala)}
                  onAgregarIncidencia={(descripcion) => agregarIncidencia(salaSeleccionada.idSala, descripcion)}
                  onCambiarEstadoIncidencia={cambiarEstadoIncidencia}
                />
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