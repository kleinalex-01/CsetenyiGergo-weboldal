import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom marker icon
const DefaultIcon = L.divIcon({
  html: `<div style="background-color: #22c55e; width: 25px; height: 25px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.2);"></div>`,
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [1, -25],
  className: 'custom-marker'
});

interface LeafletMapProps {
  width?: string;
  height?: string;
  className?: string;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ 
  width = "100%", 
  height = "200px",
  className = ""
}) => {
  // Coordinates for Szentkirályszabadja, Petőfi Sándor utca 29
  const position: [number, number] = [47.0951, 18.1050]; // Szentkirályszabadja coordinates
  
  return (
    <div className={`leaflet-map-container ${className}`}>
      <MapContainer
        center={position}
        zoom={15}
        style={{ width, height, borderRadius: '8px' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={DefaultIcon}>
          <Popup>
            <div style={{ textAlign: 'center', minWidth: '200px' }}>
              <strong>Csetényi Gépészet</strong><br />
              8225 Szentkirályszabadja<br />
              Petőfi Sándor utca 29.<br />
              <br />
              <a 
                href="https://www.openstreetmap.org/search?query=8225%20Szentkir%C3%A1lyszabadja%20Pet%C5%91fi%20S%C3%A1ndor%20utca%2029"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#22c55e', textDecoration: 'none' }}
              >
                📍 Útvonaltervezés
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;