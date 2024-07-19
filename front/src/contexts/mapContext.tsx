import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

interface MapContextProps {
  fetchAddress: (lat: number, lon: number) => Promise<void>;
  selectedCollectionPointInfo: any;
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
  const [selectedCollectionPointInfo, setSelectedCollectionPointInfo] =
    useState<any>();
  const [showColectMarkerInfo, setShowColectMarkerInfo] =
    useState<boolean>(false);
  const [loadingColectMarkerInfo, setLoadingColectMarkerInfo] =
    useState<boolean>(false);

  const fetchAddress = async (collectionPointInfo: any) => {
    try {
      setLoadingColectMarkerInfo(true);
      updateShowMarkerInfo(true);
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse`,
        {
          params: {
            lat: collectionPointInfo.latitude,
            lon: collectionPointInfo.longitude,
            format: "json",
          },
        }
      );
      setLoadingColectMarkerInfo(false);
      console.log({
        ...response.data.address,
        ...collectionPointInfo,
      });
      setSelectedCollectionPointInfo({
        ...response.data.address,
        ...collectionPointInfo,
      });
    } catch (error) {
      setLoadingColectMarkerInfo(false);
      setSelectedCollectionPointInfo(null);
    }
  };

  const updateShowMarkerInfo = (value: boolean) => {
    setShowColectMarkerInfo(value);
  };

  return (
    <MapContext.Provider
      value={{
        fetchAddress,
        selectedCollectionPointInfo,
        showColectMarkerInfo,
        updateShowMarkerInfo,
        loadingColectMarkerInfo,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
