import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import "./index.css";
import { MapProvider } from "./contexts/mapContext";

function App() {
  return (
    <div className="App">
      <MapProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </Router>
      </MapProvider>
    </div>
  );
}

export default App;
