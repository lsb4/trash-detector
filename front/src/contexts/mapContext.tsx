import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

interface MapContextProps {
  fetchAddress: (lat: number, lon: number) => Promise<void>;
  selectedMarkerAddress: any;
  showColectMarkerInfo: boolean;
  updateShowMarkerInfo: (value: boolean) => void;
  loadingColectMarkerInfo: boolean;
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
  const [showColectMarkerInfo, setShowColectMarkerInfo] =
    useState<boolean>(false);
  const [loadingColectMarkerInfo, setLoadingColectMarkerInfo] =
    useState<boolean>(false);

  const fetchAddress = async (lat: number, lon: number) => {
    try {
      setLoadingColectMarkerInfo(true);
      updateShowMarkerInfo(true); 
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
      setLoadingColectMarkerInfo(false);
      setSelectedMarkerAddress(response.data.address);
    } catch (error) {
      setLoadingColectMarkerInfo(false);
      setSelectedMarkerAddress(null);
    }
  };

  const updateShowMarkerInfo = (value: boolean) => {
    setShowColectMarkerInfo(value);
  };

  return (
    <MapContext.Provider
      value={{
        fetchAddress,
        selectedMarkerAddress,
        showColectMarkerInfo,
        updateShowMarkerInfo,
        loadingColectMarkerInfo,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
