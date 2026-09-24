import { useState } from 'react'

function Login({ onIniciarSesion }) {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  function autenticar(usuario, clave) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (usuario === 'admin' && clave === 'pepe2026') {
          resolve({ nombre: 'Administrador' })
        } else {
          reject(new Error('Usuario o contraseña incorrectos'))
        }
      }, 600)
    })
  }

  function manejarEnvio(e) {
    e.preventDefault()
    setError('')
    setCargando(true)

    autenticar(usuario, clave)
      .then((datosUsuario) => {
        onIniciarSesion(datosUsuario)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setCargando(false)
      })
  }

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={manejarEnvio}>
        <h1 className="login-title">Gestión de Aseo</h1>
        <p className="login-subtitle">Ingresa con tu cuenta de administrador</p>

        <label className="form-label small text-muted">Usuario</label>
        <input
          type="text"
          className="form-control mb-3"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="admin"
          required
        />

        <label className="form-label small text-muted">Contraseña</label>
        <input
          type="password"
          className="form-control mb-3"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          placeholder="••••••••"
          required
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit" className="btn btn-primary w-100" disabled={cargando}>
          {cargando ? 'Verificando...' : 'Iniciar sesión'}
        </button>
      </form>
    </div>
  )
}

export default Login