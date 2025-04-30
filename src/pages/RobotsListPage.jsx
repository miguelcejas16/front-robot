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
    <div className="max-w-6xl my-4 mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Lista de Robots</h1>

      {/* Filtros */}
      <div className="flex justify-between mb-6">
        <div>
          <label className="mr-2 text-gray-700 dark:text-gray-300">Filtrar por Origen: </label>
          <select
            value={selectedOrigen}
            onChange={handleFilterOrigen}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          >
            <option value="">Todos</option>
            <option value="Pelicula">Película</option>
            <option value="Serie">Serie</option>
            <option value="Videojuego">Videojuego</option>
            <option value="Comic">Comic</option>
          </select>
        </div>

        <div>
          <label className="mr-2 text-gray-700 dark:text-gray-300">Filtrar por Bando: </label>
          <select
            value={selectedBando}
            onChange={handleFilterBando}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          >
            <option value="">Todos</option>
            <option value="Heroe">Héroe</option>
            <option value="Villano">Villano</option>
            <option value="Neutral">Neutral</option>
          </select>
        </div>
      </div>

      {/* Lista de robots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {robots.map((robot) => (
          <RobotCard key={robot._id} robot={robot} />
        ))}
      </div>
    </div>
  );
};

export default RobotsListPage;

