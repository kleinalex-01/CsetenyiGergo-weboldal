import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <h1>Üdvözöljük a Csetényi Gépészetnél</h1>
        <p>Minőségi gépészeti szolgáltatások Magyarországon</p>
        <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          <h2>Főoldal tartalom</h2>
          <p>Ez a főoldal tartalma. A navigációs sáv segítségével navigálhat a különböző oldalak között.</p>
          <ul>
            <li><strong>Főoldal</strong> - Ez az oldal</li>
            <li><strong>Szolgáltatások</strong> - Gépészeti szolgáltatásaink</li>
            <li><strong>Galéria</strong> - Munkáink képei</li>
            <li><strong>Kapcsolat</strong> - Elérhetőségeink</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;