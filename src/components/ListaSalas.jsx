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

  function ListaSalas() {
    const [listaSalas, setListaSalas] = useState(salasIniciales)
    const [pisoActivo, setPisoActivo] = useState(1)
    const [salaSeleccionadaId, setSalaSeleccionadaId] = useState(null)
  
    const salaSeleccionada = listaSalas.find((s) => s.idSala === salaSeleccionadaId)

    function marcarAseoRealizado(idSala) {
        setListaSalas(
          listaSalas.map((sala) =>
            sala.idSala === idSala
              ? { ...sala, estado: 'limpio', horaUltimaLimpieza: formatearFechaHoraActual() }
              : sala
          )
        )
      }

      return (
        <div className="container py-4">
          <h1 className="mb-4 text-center">Gestión de Aseo</h1>
    
          <ul className="nav nav-pills justify-content-center mb-4">
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
    
          <div className="row g-3">
            {listaSalas
              .filter((sala) => sala.piso === pisoActivo)
              .map((sala) => (
                <div className="col-6 col-md-4 col-lg-3" key={sala.idSala}>
                  <div
                    className="card h-100 shadow-sm"
                    role="button"
                    onClick={() => setSalaSeleccionadaId(sala.idSala)}
                  >
                    <div className="card-body text-center">
                      <h5 className="card-title">{sala.numero}</h5>
                      <span className={`badge bg-${colorEstado(sala.estado)}`}>
                        {sala.estado}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
    
          {salaSeleccionada && (
            <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-3">
                  <div className="modal-header">
                    <h5 className="modal-title">Sala {salaSeleccionada.numero}</h5>
                    <button
                      className="btn-close"
                      onClick={() => setSalaSeleccionadaId(null)}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p><strong>Piso:</strong> {salaSeleccionada.piso}</p>
                    <p>
                      <strong>Estado:</strong>{' '}
                      <span className={`badge bg-${colorEstado(salaSeleccionada.estado)}`}>
                        {salaSeleccionada.estado}
                      </span>
                    </p>
                    <p><strong>Última limpieza:</strong> {salaSeleccionada.horaUltimaLimpieza}</p>
                    <p><strong>Trabajadores asignados:</strong> {salaSeleccionada.trabajador.join(', ')}</p>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success" onClick={() => marcarAseoRealizado(salaSeleccionada.idSala)}>
                      Marcar aseo realizado
                    </button>
                    <button className="btn btn-secondary" onClick={() => setSalaSeleccionadaId(null)}>
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