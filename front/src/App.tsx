import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import "./index.css";
import { MapProvider } from "./contexts/mapContext";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <MapProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
            </Routes>
          </Router>
        </MapProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
