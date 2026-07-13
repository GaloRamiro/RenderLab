import React, { useState } from 'react';
import Caso2Error from './Caso2Error';
import Caso2Corregido from './Caso2Corregido';

/**
 * @component Caso2RenderIndex
 * @description Contenedor principal del Caso 2 que permite alternar vistas,
 * protegiendo la aplicación al dejar la versión corregida por defecto.
 */
const Caso2RenderIndex = () => {
  const [showError, setShowError] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#1e3a8a' }}>Caso 2: Error “Too many re-renders”</h2>
      <p style={{ color: '#4b5563', marginBottom: '20px' }}>
        Análisis de las consecuencias de disparar mutaciones de estado de forma síncrona en el cuerpo del componente.
      </p>

      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setShowError(!showError)} 
          style={{
            padding: '10px 15px',
            backgroundColor: showError ? '#374151' : '#dc2626',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {showError ? "🔴 Desactivar Versión con Error" : "💥 Activar Versión con Error"}
        </button>
      </div>

      {showError ? <Caso2Error /> : <Caso2Corregido />}
    </div>
  );
};

export default Caso2RenderIndex;