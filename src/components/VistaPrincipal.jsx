function VistaPrincipal({ salas }) {
    const total = salas.length
    const limpias = salas.filter((s) => s.estado === 'limpio').length
    const pendientes = salas.filter((s) => s.estado === 'pendiente').length
    const enProceso = salas.filter((s) => s.estado === 'en_proceso').length
  
    const pctLimpias = total ? Math.round((limpias / total) * 100) : 0
    const pctPendientes = total ? Math.round((pendientes / total) * 100) : 0
    const pctEnProceso = total ? 100 - pctLimpias - pctPendientes : 0
  
    const gradiente = `conic-gradient(
      #198754 0% ${pctLimpias}%,
      #dc3545 ${pctLimpias}% ${pctLimpias + pctPendientes}%,
      #ffc107 ${pctLimpias + pctPendientes}% 100%
    )`
  
    return (
      <div>
        <h2 className="mb-1">Menu Principal</h2>
        <p className="text-muted mb-4">Estado general de limpieza del edificio</p>
  
        <div className="row g-3 mb-4">
          <div className="col-6 col-md-3">
            <div className="card kpi-card h-100">
              <div className="card-body">
                <span className="kpi-label">Total salas</span>
                <span className="kpi-value">{total}</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card kpi-card h-100">
              <div className="card-body">
                <span className="kpi-label">Limpias</span>
                <span className="kpi-value kpi-ok">{limpias}</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card kpi-card h-100">
              <div className="card-body">
                <span className="kpi-label">Pendientes</span>
                <span className="kpi-value kpi-warn">{pendientes}</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card kpi-card h-100">
              <div className="card-body">
                <span className="kpi-label">En proceso</span>
                <span className="kpi-value kpi-proc">{enProceso}</span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="card kpi-card">
          <div className="card-body d-flex flex-column flex-md-row align-items-center gap-4">
            <div className="donut" style={{ background: gradiente }}>
              <div className="donut-hole">
                <strong>{pctLimpias}%</strong>
                <span>Limpio</span>
              </div>
            </div>
  
            <div className="donut-legend">
              <div className="legend-item">
                <span className="legend-dot" style={{ background: '#198754' }}></span>
                Limpio ({limpias})
              </div>
              <div className="legend-item">
                <span className="legend-dot" style={{ background: '#dc3545' }}></span>
                Pendiente ({pendientes})
              </div>
              <div className="legend-item">
                <span className="legend-dot" style={{ background: '#ffc107' }}></span>
                En proceso ({enProceso})
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default VistaPrincipal