function Sidebar({ vistaActiva, onCambiarVista, usuarioActual, onCerrarSesion }) {
    const opciones = [
        { id: 'inicio', etiqueta: 'Menu Principal' },
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
        <div className="sidebar-footer">
        <span className="sidebar-user">{usuarioActual?.nombre}</span>
        <button className="sidebar-logout" onClick={onCerrarSesion}>
          Cerrar sesión
        </button>
      </div>
      </aside>
    )
  }
  
  export default Sidebar