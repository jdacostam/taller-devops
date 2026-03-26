function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <div className="animated-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <div className="content">
          <div className="badge">
            <span className="badge-icon">✨</span>
            <span>Desplegado con GitHub Actions</span>
          </div>
          
          <h1 className="main-title">
            Hola DevOps
          </h1>
          
          <p className="subtitle">
            Integración continua y despliegue automático para un desarrollo ágil y eficiente
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-wrapper blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3>CI/CD Automatizado</h3>
              <p>Pipeline completamente automático listo</p>
            </div>
            
            <div className="feature-card">
              <div className="icon-wrapper purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3>Contenedores Docker</h3>
              <p>Infraestructura moderna y escalable con contenedores</p>
            </div>
            
            <div className="feature-card">
              <div className="icon-wrapper green">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3>Alta Disponibilidad</h3>
              <p>Sistema robusto con monitoreo continuo</p>
            </div>
          </div>
          
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Automatizado</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Disponibilidad</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Escalabilidad</div>
            </div>
          </div>
          
          <footer className="footer">
            <p>🎓 Ingeniería de Software - Taller DevOps</p>
             <p>Presentado por Juan Diego Acosta M.</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
