import Map from "../components/map";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/select";
import { MapProvider } from "../contexts/mapContext";

function Home() {
  return (
    <MapProvider>
      <div className="bg-gray-800 flex items-center justify-center w-full h-screen">
        <div className="bg-white rounded-3xl h-4/5 w-4/5 p-5 flex flex-col items-center justify-start gap-5">
          <div className="w-full flex justify-between gap-4">
            <div className="home-card-info">
              <p>Áreas de alerta</p>
              <h1>13</h1>
            </div>
            <div className="home-card-info">
              <p>Caminhões Livres para Coleta</p>
              <h1>1</h1>
            </div>
            <div className="home-card-info">
              <p>Coletas em andamento</p>
              <h1>3</h1>
            </div>
            <div className="home-card-info">
              <p>Coletas Realizadas</p>
              <h1>162</h1>
            </div>
          </div>
          <div className="w-full h-[490px] flex gap-7">
            <div className="w-3/4 h-full">
              <Map></Map>
            </div>
            <div className="h-full w-1/4">
              <p className="mb-2">Filtrar por:</p>
              <div className="w-full flex flex-col gap-3">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Grau de Acúmulo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Baixo">Baixo</SelectItem>
                    <SelectItem value="Médio">Médio</SelectItem>
                    <SelectItem value="Alto">Alto</SelectItem>
                    <SelectItem value="Extremo">Extremo</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Prioridade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Baixa prioridade">
                      Baixa prioridade
                    </SelectItem>
                    <SelectItem value="Média prioridade">
                      Média prioridade
                    </SelectItem>
                    <SelectItem value="Alta prioridade">
                      Alta prioridade
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Tempo de Coleta Estimado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Menos de 30 minutos">
                      Menos de 30 minutos
                    </SelectItem>
                    <SelectItem value="Entre 30 e 60 minutos">
                      Entre 30 e 60 minutos
                    </SelectItem>
                    <SelectItem value="Entre 1 e 2 horas">
                      Entre 1 e 2 horas
                    </SelectItem>
                    <SelectItem value="Mais de 2 horas">
                      Mais de 2 horas
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Tempo desde a última coleta" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Menos de 10 dias">
                      Menos de 10 dias
                    </SelectItem>
                    <SelectItem value="Entre 10 e 30 dias">
                      Entre 10 e 30 dias
                    </SelectItem>
                    <SelectItem value="Entre 30 e 90 dias">
                      Entre 30 e 90 dias
                    </SelectItem>
                    <SelectItem value="Mais de 90 dias">
                      Mais de 90 dias
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MapProvider>
  );
}

export default Home;
