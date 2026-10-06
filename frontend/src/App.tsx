import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alerts from "./pages/Alerts";
import "./App.css";
import AddAlert from "./pages/AddAlert";
import UpdateAlert from "./pages/UpdateAlert";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AdminPage from "./pages/AdminPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/alerts/add" element={<AddAlert />} />
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="users/register" element={<Register />} />
          <Route path="users/admin-page" element={<AdminPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
