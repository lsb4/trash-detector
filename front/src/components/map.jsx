import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ColectMarker from "./colectMarker";
import { useMap } from "../contexts/mapContext";
import { useEffect, useState } from "react";
import { fetchCollectionPoints } from "../backend";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function Map() {
  const [collectionPoints, setCollectionPoints] = useState([]);

  const myPosition = [-8.05144686998459, -34.94719048046851]; // Posição inicial do mapa (latitude, longitude)

  const getCollectionPoints = async () => {
    try {
      const response = await fetchCollectionPoints();
      setCollectionPoints(response);
    } catch (error) {
      console.error("Failed to fetch collection points:", error);
    }
  };

  useEffect(() => {
    getCollectionPoints();
  }, []);

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
      {collectionPoints.length > 0 ? (
        collectionPoints.map((collectionPoint) => (
          <ColectMarker
            key={collectionPoint.id}
            collectionPoint={collectionPoint}
          />
        ))
      ) : (
        <></>
      )}
    </MapContainer>
  );
}

export default Map;
