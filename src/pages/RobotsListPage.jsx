import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAllRobots, filterByOrigen, filterByBando } from "../api/robots";
import RobotCard from "../components/RobotCard";
import Swal from "sweetalert2";

const RobotsListPage = () => {
  const { token } = useContext(AuthContext);
  const [robots, setRobots] = useState([]);
  const [selectedOrigen, setSelectedOrigen] = useState("");
  const [selectedBando, setSelectedBando] = useState("");

  useEffect(() => {
    fetchAll();
  }, [token]);

  const fetchAll = async () => {
    try {
      const data = await getAllRobots(token);
      setRobots(data);
    } catch (error) {
      Swal.fire("Error", error.response?.data?.error || "No se pudieron cargar los robots", "error");
    }
  };

  const handleFilterOrigen = async (e) => {
    const origen = e.target.value;
    setSelectedOrigen(origen);
    if (origen === "") {
      fetchAll();
    } else {
      try {
        const data = await filterByOrigen(origen, token);
        setRobots(data);
      } catch (error) {
        Swal.fire("Error", "No se pudo filtrar por origen", "error");
      }
    }
  };

  const handleFilterBando = async (e) => {
    const bando = e.target.value;
    setSelectedBando(bando);
    if (bando === "") {
      fetchAll();
    } else {
      try {
        const data = await filterByBando(bando, token);
        setRobots(data);
      } catch (error) {
        Swal.fire("Error", "No se pudo filtrar por bando", "error");
      }
    }
  };

  return (
    <div>
      <h2>Lista de Robots</h2>

      {/* Filtros */}
      <div style={{ marginBottom: 20 }}>
        <label>Filtrar por Origen: </label>
        <select value={selectedOrigen} onChange={handleFilterOrigen}>
          <option value="">Todos</option>
          <option value="Pelicula">Película</option>
          <option value="Serie">Serie</option>
          <option value="Videojuego">Videojuego</option>
          <option value="Comic">Comic</option>
        </select>

        <label style={{ marginLeft: 20 }}>Filtrar por Bando: </label>
        <select value={selectedBando} onChange={handleFilterBando}>
          <option value="">Todos</option>
          <option value="Heroe">Héroe</option>
          <option value="Villano">Villano</option>
          <option value="Neutral">Neutral</option>
        </select>
      </div>

      {/* Lista de robots */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {robots.map((robot) => (
          <RobotCard key={robot._id} robot={robot} />
        ))}
      </div>
    </div>
  );
};

export default RobotsListPage;

