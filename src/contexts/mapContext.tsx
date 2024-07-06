import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

interface MapContextProps {
  fetchAddress: (lat: number, lon: number) => Promise<void>;
  selectedMarkerAddress: any;
}

const MapContext = createContext<MapContextProps | undefined>(undefined);

export const useMap = (): MapContextProps => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMap must be used within a MapProvider");
  }
  return context;
};

interface MapProviderProps {
  children: ReactNode;
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const [selectedMarkerAddress, setSelectedMarkerAddress] = useState<any>();

  const fetchAddress = async (lat: number, lon: number) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse`,
        {
          params: {
            lat,
            lon,
            format: "json",
          },
        }
      );
      setSelectedMarkerAddress(response.data.address);
      console.log(response.data.address);
    } catch (error) {
      console.error("Erro ao buscar endereço:", error);
      setSelectedMarkerAddress(null);
    }
  };

  return (
    <MapContext.Provider value={{ fetchAddress, selectedMarkerAddress }}>
      {children}
    </MapContext.Provider>
  );
};
