import "leaflet/dist/leaflet.css";
import "../lib/loader.css";
import { useMap } from "../contexts/mapContext";
import CloseIcon from "@mui/icons-material/Close";

function ColectMarkerInfo() {
  const {
    selectedMarkerAddress,
    loadingColectMarkerInfo,
    updateShowMarkerInfo,
  } = useMap();

  return (
    <div className="h-full w-1/4 border-[2px] border-[#D9D9D9] bg-[#f6f6f6] rounded-xl py-4 px-4 flex flex-col justify-between relative">
      {loadingColectMarkerInfo ? (
        <div className="w-full h-full flex justify-center items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <CloseIcon
            onClick={() => updateShowMarkerInfo(false)}
            className="text-[#D9D9D9] hover:text-black !transition-all absolute top-2 right-2 cursor-pointer"
          />
          <div>
            <p className="font-nunito text-[20px] font-bold">Endereço:</p>
            <p className="font-nunito text-[14px] mb-2 -mt-[2px]">
              {selectedMarkerAddress.road}, {selectedMarkerAddress.house_number}
              <br />
              {selectedMarkerAddress.suburb}
            </p>
            <p className="font-nunito text-[20px] font-bold">
              Nível de Acúmulo:
            </p>
            <p className="font-nunito text-[14px] mb-2 -mt-[2px]">Extremo</p>
            <p className="font-nunito text-[20px] font-bold">Última coleta:</p>
            <p className="font-nunito text-[14px] mb-2 -mt-[2px]">04/02/2024</p>
            <p className="font-nunito text-[20px] font-bold">Prioridade:</p>
            <p className="font-nunito text-[14px] -mt-[2px]">Alta</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <button className="bg-[#0097B2] w-full text-[22px] font-nunito font-bold text-white rounded-xl py-1.5">
              Solicitar Coleta
            </button>
            <p className="text-[13px]">
              <b>Estimativa de chegada:</b> 17min
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ColectMarkerInfo;
