import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h1>Galéria</h1>
        <p>Munkáink és projektjeink képei</p>
        <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: '#fef3c7', borderRadius: '8px' }}>
          <h2>Projekt képek</h2>
          <p>Itt találhatóak a cégünk által végzett munkák képei és projekt dokumentációk.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '4px', textAlign: 'center' }}>Projekt 1</div>
            <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '4px', textAlign: 'center' }}>Projekt 2</div>
            <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '4px', textAlign: 'center' }}>Projekt 3</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;