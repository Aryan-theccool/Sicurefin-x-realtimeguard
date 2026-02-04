import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom Icons
const fraudIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const safeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function MapView({ transactions }) {
  // Group transactions by user to find jumps
  const userPaths = {};
  transactions.forEach(tx => {
    if (!userPaths[tx.user_id]) userPaths[tx.user_id] = [];
    userPaths[tx.user_id].push([tx.lat, tx.lon]);
  });

  const polylineOptions = { color: '#f59e0b', weight: 2, dashArray: '5, 10' };

  return (
    <div className="h-full w-full rounded-xl overflow-hidden glass-panel border border-slate-700 relative">
      <div className="absolute top-4 right-4 z-[1000] bg-slate-900/80 backdrop-blur p-2 rounded border border-slate-700">
        <h3 className="text-xs font-bold text-slate-300 uppercase">Live Geo-Tracking</h3>
      </div>

      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {transactions.map((tx) => (
          <Marker
            key={tx.id}
            position={[tx.lat, tx.lon]}
            icon={tx.fraud_score > 80 ? fraudIcon : safeIcon}
          >
            <Popup className="custom-popup">
              <div className="text-slate-800">
                <strong>{tx.merchant}</strong><br />
                ₹{tx.amount?.toFixed(2)}<br />
                Risk: {tx.fraud_score}%
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Draw lines for user movement */}
        {Object.values(userPaths).map((path, idx) => (
          path.length > 1 && <Polyline key={idx} positions={path} pathOptions={polylineOptions} />
        ))}
      </MapContainer>
    </div>
  );
}
