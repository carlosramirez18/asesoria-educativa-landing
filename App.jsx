import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', padding: '2rem' }}>
      <h1>Asesoría Educativa</h1>
      <p>Te ayudo a encontrar la mejor opción para continuar tus estudios.</p>
      <a
        href="https://wa.me/525526646095"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#25D366',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          zIndex: 1000
        }}
      >
        WhatsApp
      </a>
    </div>
  );
}