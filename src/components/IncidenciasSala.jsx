import { useState } from 'react'

function IncidenciasSala({ incidencias, onAgregarIncidencia, onCambiarEstadoIncidencia }) {
  const [descripcion, setDescripcion] = useState('')

  function manejarEnviar(e) {
    e.preventDefault()
    if (descripcion.trim() === '') return
    onAgregarIncidencia(descripcion)
    setDescripcion('')
  }

  return (
    <div className="mt-3">
      <h6>Incidencias</h6>

      {incidencias.length === 0 && (
        <p className="text-muted small">Sin incidencias registradas.</p>
      )}

      <ul className="list-group mb-3">
        {incidencias.map((inc) => (
          <li key={inc.idIncidencia} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <div>{inc.descripcion}</div>
              <small className="text-muted">{inc.fecha}</small>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className={`badge ${inc.estado === 'abierta' ? 'bg-danger' : 'bg-secondary'}`}>
                {inc.estado}
              </span>
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => onCambiarEstadoIncidencia(inc.idIncidencia)}
              >
                {inc.estado === 'abierta' ? 'Marcar resuelta' : 'Reabrir'}
              </button>
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={manejarEnviar} className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Describe la incidencia..."
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
    </div>
  )
}

export default IncidenciasSala