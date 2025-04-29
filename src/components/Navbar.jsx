import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">Robots</Link>
      <Link to="/favorites">Favoritos</Link>
      {user?.role === "admin" && <Link to="/create">Crear Robot</Link>}
      <p>Hola, {user ? user.username : "Cargando..."}</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </nav>
  );
};

export default Navbar;
