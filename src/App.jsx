import { useState } from 'react';
import Dashboard from './components/Dashboard';

// Reemplaza tus líneas viejas por estas dos exactamente:
import Caso1EffectIndex from './components/Caso1Render/Index.jsx';
import Caso2RenderIndex from './components/Caso2Render/Index.jsx';

/**
 * @component App
 * @description Componente maestro. Gestiona el estado de la pestaña activa 
 * y despliega la barra de navegación idéntica al requerimiento visual.
 */
function App() {
  // Estado para controlar qué sección está viendo el usuario
  const [activeTab, setActiveTab] = useState('inicio');

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, padding: 0, backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      
      {/* Navbar Superior con Estilo Azul Oscuro Ejecutivo */}
      <nav style={{ backgroundColor: '#0f172a', color: 'white', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '1.3rem', fontWeight: '700', letterSpacing: '0.5px' }}>🧪 React Render Lab</h1>
        
        {/* Menú de Opciones */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <button 
            onClick={() => setActiveTab('inicio')} 
            style={{ background: 'none', border: 'none', color: activeTab === 'inicio' ? '#3b82f6' : '#94a3b8', cursor: 'pointer', fontSize: '1rem', fontWeight: '600', borderBottom: activeTab === 'inicio' ? '2px solid #3b82f6' : 'none', paddingBottom: '4px', transition: 'all 0.2s' }}
          >
            Inicio
          </button>
          <button 
            onClick={() => setActiveTab('caso1')} 
            style={{ background: 'none', border: 'none', color: activeTab === 'caso1' ? '#3b82f6' : '#94a3b8', cursor: 'pointer', fontSize: '1rem', fontWeight: '600', borderBottom: activeTab === 'caso1' ? '2px solid #3b82f6' : 'none', paddingBottom: '4px', transition: 'all 0.2s' }}
          >
            Caso 1
          </button>
          <button 
            onClick={() => setActiveTab('caso2')} 
            style={{ background: 'none', border: 'none', color: activeTab === 'caso2' ? '#3b82f6' : '#94a3b8', cursor: 'pointer', fontSize: '1rem', fontWeight: '600', borderBottom: activeTab === 'caso2' ? '2px solid #3b82f6' : 'none', paddingBottom: '4px', transition: 'all 0.2s' }}
          >
            Caso 2
          </button>
        </div>
      </nav>

      {/* Contenedor Semántico Principal */}
      <main style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto' }}>
        {activeTab === 'inicio' && <Dashboard />}
        {activeTab === 'caso1' && <Caso1EffectIndex />}
        {activeTab === 'caso2' && <Caso2RenderIndex />}
      </main>

    </div>
  );
}

export default App;