import React, { useState, useEffect } from 'react';

/**
 * @component Caso1Corregido
 * @description Componente que soluciona el bucle infinito aplicando un arreglo
 * de dependencias vacío, limitando la ejecución del efecto al montaje inicial.
 */
const Caso1Corregido = () => {
  const [count, setCount] = useState(0);

  // ✅ SOLUCIÓN:
  // Dejar el arreglo de dependencias vacío '[]' le indica a React que la lógica
  // interna del efecto debe ejecutarse ÚNICAMENTE una vez, justo cuando el 
  // componente se monta en el DOM. Esto evita re-renderizados infinitos.
  useEffect(() => {
    setCount(1);
  }, []); // <--- Arreglo vacío = Ejecución única al montar

  return (
    <div style={{ padding: '20px', border: '2px solid #22c55e', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
      <h3 style={{ color: '#15803d', marginTop: 0 }}>✅ Versión Corregida</h3>
      <p style={{ color: '#14532d' }}>El estado se actualiza de forma controlada una sola vez al cargar la vista.</p>
      <p style={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '1.2rem' }}>Contador: {count}</p>
    </div>
  );
};

export default Caso1Corregido;