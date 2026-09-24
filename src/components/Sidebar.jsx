function Sidebar({ vistaActiva, onCambiarVista }) {
    const opciones = [
      { id: 'salas', etiqueta: 'Salas' },
      { id: 'asignar', etiqueta: 'Asignar trabajadores' },
      { id: 'trabajadores', etiqueta: 'Historial de trabajadores' },
    ]
  
    return (
      <aside className="app-sidebar">
        <div className="sidebar-brand">Gestión de Aseo</div>
        <nav className="sidebar-nav">
          {opciones.map((op) => (
            <button
              key={op.id}
              className={`sidebar-link ${vistaActiva === op.id ? 'active' : ''}`}
              onClick={() => onCambiarVista(op.id)}
            >
              {op.etiqueta}
            </button>
          ))}
        </nav>
      </aside>
    )
  }
  
  export default Sidebar