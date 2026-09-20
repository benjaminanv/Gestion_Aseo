import { useState } from 'react'
import { salas } from '../data/salas'

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
    <div>
      <button onClick={() => setPisoActivo(1)}>Piso 1</button>
      <button onClick={() => setPisoActivo(2)}>Piso 2</button>
      <button onClick={() => setPisoActivo(3)}>Piso 3</button>
      <button onClick={() => setPisoActivo(4)}>Piso 4</button>

      <h2>Piso {pisoActivo}</h2>

      {listaSalas.filter((sala) => sala.piso === pisoActivo)
        .map((sala) => (
          <div key={sala.idSala} onClick={() => setSalaSeleccionadaId(sala.idSala)}>
            <p>Sala: {sala.numero} — Estado: {sala.estado}</p>
          </div>
        ))}

{salaSeleccionada && (<div>
          <h3>Detalle de la sala {salaSeleccionada.numero}</h3>
          <p>Piso: {salaSeleccionada.piso}</p>
          <p>Estado: {salaSeleccionada.estado}</p>
          <p>Última limpieza: {salaSeleccionada.horaUltimaLimpieza}</p>
          <p>Trabajadores asignados: {salaSeleccionada.trabajador.join(', ')}</p>
          <button onClick={() => marcarAseoRealizado(salaSeleccionada.idSala)}>
            Marcar aseo realizado
          </button>
          <button onClick={() => setSalaSeleccionadaId(null)}>Cerrar detalle</button>
        </div>
      )}
    </div>
  )
}


   
  


export default ListaSalas