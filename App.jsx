import React from 'react'

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '2rem' }}>
      <h1>Hola, soy Carlos Ramírez</h1>
      <p>Te ayudo a elegir y retomar tu carrera profesional con asesoría educativa personalizada.</p>
      <a href="https://wa.me/525526646095" target="_blank" rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: '#fff',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          textDecoration: 'none',
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
        &#128172;
      </a>
    </div>
  )
}

export default App