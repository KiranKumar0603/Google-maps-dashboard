import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Report from "./pages/Report/Report";
import TrackOnMap from "./pages/TrackOnMap/TrackOnMap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/report" element={<Report />} />
          <Route path="/track" element={<TrackOnMap />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
