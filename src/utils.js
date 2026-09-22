export function colorEstado(estado) {
    if (estado === 'limpio') return 'success'
    if (estado === 'pendiente') return 'danger'
    return 'warning'
  }
  
  export function nombreEstado(estado) {
    if (estado === 'en_proceso') return 'En proceso'
    if (estado === 'limpio') return 'Limpio'
    if (estado === 'pendiente') return 'Pendiente'
    return estado
  }