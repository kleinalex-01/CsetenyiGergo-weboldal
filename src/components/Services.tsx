import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h1>Szolgáltatások</h1>
        <p>Gépészeti szolgáltatásaink széles skálája</p>
        <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
          <h2>Szolgáltatásaink</h2>
          <ul>
            <li>Gépgyártás és szerelés</li>
            <li>Karbantartás és javítás</li>
            <li>Technikai tanácsadás</li>
            <li>Egyedi megoldások</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;