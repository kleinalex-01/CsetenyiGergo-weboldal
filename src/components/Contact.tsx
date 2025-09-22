import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h1>Kapcsolat</h1>
        <p>Lépjen kapcsolatba velünk</p>
        <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
          <h2>Kapcsolati információk</h2>
          <div style={{ marginTop: '1rem' }}>
            <p><strong>Cég neve:</strong> Csetényi Gépészet Kft.</p>
            <p><strong>Cím:</strong> Magyarország, Budapest</p>
            <p><strong>Telefon:</strong> +36 1 234 5678</p>
            <p><strong>Email:</strong> info@csetenyigepezet.hu</p>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h3>Üzenet küldése</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
              <input type="text" placeholder="Név" style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }} />
              <input type="email" placeholder="Email" style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }} />
              <textarea placeholder="Üzenet" rows={4} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }}></textarea>
              <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Küldés</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;