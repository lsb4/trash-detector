import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import trash from "./assets/trash.png";
import { useMap } from "../contexts/mapContext";

const customIcon = new L.Icon({
  iconUrl: trash,
  iconSize: [38, 38], // Ajuste o tamanho do ícone conforme necessário
  iconAnchor: [19, 38], // Ajuste a âncora do ícone conforme necessário
  popupAnchor: [0, -38], // Ajuste a âncora do popup conforme necessário
});

function ColectMarker({ area }) {
  const { fetchAddress } = useMap();
  const handleClick = () => {
    fetchAddress(area[0], area[1]);
  };

  return (
    <Marker
      key={area}
      position={area}
      icon={customIcon}
      eventHandlers={{
        click: handleClick,
      }}
    ></Marker>
  );
}

export default ColectMarker;
