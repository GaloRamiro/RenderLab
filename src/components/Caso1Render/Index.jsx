import React, { useState } from 'react';
import Caso1Error from './Caso1Error';
import Caso1Corregido from './Caso1Corregido';

/**
 * @component Caso1EffectIndex
 * @description Contenedor principal del Caso 1 que permite alternar entre
 * la versión con error y la corregida, protegiendo el render por defecto.
 */
const Caso1EffectIndex = () => {
  const [showError, setShowError] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#1e3a8a' }}>Caso 1: Bucle Infinito mediante useEffect</h2>
      <p style={{ color: '#4b5563', marginBottom: '20px' }}>
        Estudio de cómo las actualizaciones de estado dentro de un efecto afectan al ciclo de renderizado.
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

      {/* Mantenemos activa por defecto la versión corregida según requisitos */}
      {showError ? <Caso1Error /> : <Caso1Corregido />}
    </div>
  );
};

export default Caso1EffectIndex;