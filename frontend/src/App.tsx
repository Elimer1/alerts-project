import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alerts from "./pages/Alerts";
import "./App.css";
import AddAlert from "./pages/AddAlert";
import UpdateAlert from "./pages/UpdateAlert";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/alerts/add" element={<AddAlert />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
