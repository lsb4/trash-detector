import "leaflet/dist/leaflet.css";
import "../lib/loader.css";

function ColectAlertModal() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen z-[10000] bg-[#000000ae] flex items-center justify-center">
      <div className="bg-white w-full max-w-[550px] p-5 rounded-2xl text-center flex flex-col items-center">
        <p className="font-nunito text-[20px] font-bold">Área em Risco</p>
        <p className="text-[#0097B2] font-nunito text-[17px] font-medium mb-2">
          Foi detectada uma área com um acúmulo extremo de lixo.
          <br />É necessária a realização de uma coleta o quanto antes!
        </p>
        <p className="font-nunito text-[17px] font-medium">Endereço:</p>
        <p className="font-nunito text-[15px] mb-5">
          Rua abigail neto, 231 - Afogados
        </p>

        <button className="bg-[#0097B2] hover:bg-[#296a77] transition-all w-full text-[22px] font-nunito font-bold text-white rounded-xl py-1.5">
          Solicitar Coleta
        </button>
      </div>
    </div>
  );
}

export default ColectAlertModal;
