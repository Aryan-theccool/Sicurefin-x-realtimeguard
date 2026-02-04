"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamic import for Leaflet components to avoid SSR errors
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });
const Polyline = dynamic(() => import('react-leaflet').then((mod) => mod.Polyline), { ssr: false });

interface Transaction {
    id: string;
    lat: number;
    lon: number;
    merchant: string;
    amount: number;
    fraud_score: number;
    user_id: string;
}

interface MapViewProps {
    transactions: Transaction[];
}

const MapViewComponent = ({ transactions }: MapViewProps) => {
    const [L, setL] = useState<any>(null);

    // Limit to latest 25 for performance
    const activeTransactions = transactions.slice(0, 25);

    useEffect(() => {
        // Import leaflet only on client side
        import('leaflet').then((leaflet) => {
            setL(leaflet.default);

            // Fix icon issue
            delete (leaflet.default.Icon.Default.prototype as any)._getIconUrl;
            leaflet.default.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            });
        });
    }, []);

    if (!L) return <div className="h-full w-full bg-slate-900 animate-pulse rounded-xl" />;

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

    // Group transactions by user to find jumps
    const userPaths: { [key: string]: [number, number][] } = {};
    activeTransactions.forEach(tx => {
        if (!userPaths[tx.user_id]) userPaths[tx.user_id] = [];
        userPaths[tx.user_id].push([tx.lat, tx.lon]);
    });

    const polylineOptions = { color: '#f59e0b', weight: 2, dashArray: '5, 10' };

    return (
        <div className="h-full w-full rounded-xl overflow-hidden border border-slate-700 relative">
            <div className="absolute top-4 right-4 z-[400] bg-slate-900/80 backdrop-blur p-2 rounded border border-slate-700">
                <h3 className="text-xs font-bold text-slate-300 uppercase">Live Geo-Tracking</h3>
            </div>

            <MapContainer
                center={[20.5937, 78.9629]}
                zoom={5}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; CARTO'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />

                {activeTransactions.map((tx) => (
                    <Marker
                        key={tx.id}
                        position={[tx.lat, tx.lon]}
                        icon={tx.fraud_score > 80 ? fraudIcon : safeIcon}
                    >
                        <Popup>
                            <div className="text-slate-800">
                                <strong>{tx.merchant}</strong><br />
                                ₹{tx.amount?.toFixed(2)}<br />
                                Risk: {tx.fraud_score}%
                            </div>
                        </Popup>
                    </Marker>
                ))}

                {Object.values(userPaths).map((path, idx) => (
                    path.length > 1 && <Polyline key={idx} positions={path} pathOptions={polylineOptions} />
                ))}
            </MapContainer>
        </div>
    );
};

export default React.memo(MapViewComponent);
