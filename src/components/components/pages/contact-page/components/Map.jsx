import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import { useMediaQuery } from 'react-responsive';

const pin = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconRetinaUrl: iconRetina,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const location = {
  lat: 44.387576,
  lng: 26.24723,
};

const mapStyle = isLargerScreens => ({
  height: isLargerScreens ? '400px' : '300px',
  width: isLargerScreens ? '600px' : '300px',
  border: '1px solid #cdcdcd',
  zIndex: 0,
  boxShadow:
    'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
});

const Map = () => {
  const isLargerScreens = useMediaQuery({ minWidth: 768 });

  return (
    <MapContainer center={location} zoom={13} style={mapStyle(isLargerScreens)}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location} icon={pin} />
    </MapContainer>
  );
};

export default Map;
