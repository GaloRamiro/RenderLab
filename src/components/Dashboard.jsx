import React from 'react';

/**
 * @component Dashboard
 * @description Pantalla de bienvenida del laboratorio con la presentación formal 
 * de los requerimientos para el Instituto Superior Tecnológico Monvilis.
 */
const Dashboard = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginTop: '20px' }}>
      <h2 style={{ color: '#0f172a', fontSize: '2.2rem', marginBottom: '10px' }}>🎓 Laboratorio de Ciclos de Renderizado</h2>
      <p style={{ color: '#334155', fontWeight: '500', fontSize: '1.1rem' }}>Taller Académico - Primer Parcial</p>
      
      <hr style={{ border: 'none', height: '1px', backgroundColor: '#e2e8f0', margin: '20px auto', maxWidth: '400px' }} />
      
      <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '650px', margin: '0 auto 25px auto', lineHeight: '1.6' }}>
        Este proyecto demuestra de forma práctica y aislada cómo las actualizaciones incontroladas de estado rompen el hilo de ejecución en React, presentando tanto las versiones erróneas como sus soluciones óptimas.
      </p>
      
      <div style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#2563eb', color: 'white', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' }}>
        Instituto Superior Tecnológico Monvilis 🚀
      </div>
    </div>
  );
};

export default Dashboard;