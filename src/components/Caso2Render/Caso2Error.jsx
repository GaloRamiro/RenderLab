import React, { useState } from 'react';

/**
 * @component Caso2Error
 * @description Componente académico que reproduce intencionalmente el error fatal
 * "Too many re-renders" al ejecutar una actualización de estado directa en el render.
 */
const Caso2Error = () => {
  const [count, setCount] = useState(0);

  // 🚨 LÓGICA QUE PROVOCA EL PROBLEMA (TOO MANY RE-RENDERS):
  // Llamar a 'setCount' directamente en el cuerpo del componente hace que se ejecute 
  // durante la fase de renderizado. Esto invalida el render actual y solicita uno nuevo 
  // de forma inmediata. Al entrar en un ciclo infinito síncrono, React detiene la 
  // aplicación y lanza una excepción para evitar que el navegador colapse por completo.
  setCount(count + 1);

  return (
    <div style={{ padding: '20px', border: '2px solid #ef4444', backgroundColor: '#fef2f2', borderRadius: '8px' }}>
      <h3 style={{ color: '#b91c1c', marginTop: 0 }}>⚠️ Versión con Error (Too many re-renders)</h3>
      <p style={{ color: '#7f1d1d' }}>React detendrá la ejecución de este componente inmediatamente.</p>
    </div>
  );
};

export default Caso2Error;