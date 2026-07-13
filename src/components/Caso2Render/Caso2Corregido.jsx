import React, { useState } from 'react';

/**
 * @component Caso2Corregido
 * @description Componente que soluciona el error aislando la actualización de estado
 * dentro de un manejador de eventos que responde únicamente a la acción del usuario.
 */
const Caso2Corregido = () => {
  const [count, setCount] = useState(0);

  // ✅ SOLUCIÓN:
  // Encapsulamos el cambio de estado dentro de una función manejadora (Event Handler).
  // De esta forma, el estado ya no muta al renderizar el HTML, sino únicamente 
  // de forma asíncrona cuando el usuario hace clic real en el botón.
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ padding: '20px', border: '2px solid #22c55e', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
      <h3 style={{ color: '#15803d', marginTop: 0 }}>✅ Versión Corregida</h3>
      <p style={{ color: '#14532d' }}>El estado solo cambia de forma segura bajo demanda (evento onClick).</p>
      <p style={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '1.2rem' }}>Contador: {count}</p>
      
      <button 
        onClick={handleIncrement}
        style={{
          padding: '8px 16px',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginTop: '10px'
        }}
      >
        Incrementar
      </button>
    </div>
  );
};

export default Caso2Corregido;