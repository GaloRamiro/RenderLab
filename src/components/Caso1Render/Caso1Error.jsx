import React, { useState, useEffect } from 'react';

/**
 * @component Caso1Error
 * @description Componente académico que reproduce intencionalmente un bucle infinito
 * mediante el uso incorrecto del hook useEffect y su arreglo de dependencias.
 */
const Caso1Error = () => {
  const [count, setCount] = useState(0);

  // 🚨 LÓGICA QUE PROVOCA EL PROBLEMA (BUCLE INFINITO):
  // El useEffect se ejecuta cada vez que la variable 'count' cambia.
  // Al ejecutar 'setCount(count + 1)' dentro del efecto, modificamos el estado,
  // lo que dispara un nuevo renderizado inmediato. Al renderizarse, el efecto detecta
  // que 'count' cambió y se vuelve a ejecutar, creando un bucle infinito síncrono.
  useEffect(() => {
    setCount(count + 1);
  }, [count]); // <--- La dependencia 'count' reacciona a su propio cambio

  return (
    <div style={{ padding: '20px', border: '2px solid #ef4444', backgroundColor: '#fef2f2', borderRadius: '8px' }}>
      <h3 style={{ color: '#b91c1c', marginTop: 0 }}>⚠️ Versión con Error (Bucle Infinito en useEffect)</h3>
      <p style={{ color: '#7f1d1d' }}>Este componente bloquea el hilo de ejecución del navegador en segundo plano.</p>
      <p style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>Contador: {count}</p>
    </div>
  );
};

export default Caso1Error;