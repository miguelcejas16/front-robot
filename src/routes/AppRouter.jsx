import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RobotsListPage from "../pages/RobotsListPage";
import FavoritesPage from "../pages/FavoritesPage";
import CreateRobotPage from "../pages/CreateRobotPage";
import EditRobotPage from "../pages/EditRobotPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DetailRobotPage from "../pages/RobotDetailPage";

import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {
  const { token } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-blue-300 via-blue-600 to-blue-700">
      {token && <Navbar />}
      <Routes>
        {!token ? (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<PrivateRoute><RobotsListPage /></PrivateRoute>} />
            <Route path="/favorites" element={<PrivateRoute><FavoritesPage /></PrivateRoute>} />
            <Route path="/create" element={<AdminRoute><CreateRobotPage /></AdminRoute>} />
            <Route path="/edit/:id" element={<AdminRoute><EditRobotPage /></AdminRoute>} />
            <Route path="/robots/:id" element={<DetailRobotPage />} />
            <Route path="*" element={<NotFoundPage/>} />
          </>
        )}
      </Routes>
      {token && <Footer/>}
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
