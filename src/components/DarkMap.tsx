// DarkMap.tsx
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const DarkMap: React.FC = () => {
  return (
    <MapContainer
      center={[26.8420, 75.5645]} // Times Square, NY
      zoom={17}
      style={{ height: "300px", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        subdomains="abcd"
      />
      <Marker position={[26.8420, 75.5645]}>
        
      </Marker>
    </MapContainer>
  );
};

export default DarkMap;