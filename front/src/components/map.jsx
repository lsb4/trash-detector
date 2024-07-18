import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ColectMarker from "./colectMarker";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function Map() {
  const myPosition = [-8.05144686998459, -34.94719048046851]; // Posição inicial do mapa (latitude, longitude)
  const colectAreas = [
    [-8.044478070533055, -34.941868977888205],
    [-8.051489362296518, -34.956202702580306],
    [-8.055653587235753, -34.94530220535936],
    [-8.048684860149102, -34.95070953862645],
    [-8.05701332487878, -34.95302696716948],
    [-8.052424192030784, -34.93955154934517],
  ];

  return (
    <MapContainer
      center={myPosition}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={myPosition}></Marker>
      {colectAreas.map((area) => {
        return <ColectMarker key={area} area={area} />;
      })}
    </MapContainer>
  );
}

export default Map;
