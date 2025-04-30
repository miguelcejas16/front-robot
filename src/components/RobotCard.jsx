import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { deleteRobot } from "../api/robots";
import Swal from "sweetalert2";

const RobotCard = ({ robot }) => {
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFavorite = () => {
    if (isFavorite(robot._id)) {
      removeFavorite(robot._id);
    } else {
      addFavorite(robot);
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${robot._id}`);
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
    });

    if (result.isConfirmed) {
      try {
        await deleteRobot(robot._id, token);
        Swal.fire("Robot eliminado", "", "success");
        window.location.reload(); // Refrescamos la página para actualizar la lista
      } catch (error) {
        Swal.fire("Error", "No se pudo eliminar el robot", "error");
      }
    }
  };

  return (
    <div className="max-w-sm w-full h-[500px] flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <img
    className="rrounded-t-lg w-full h-64 object-contain"
    src={robot.imagen_url}
    alt={robot.nombre}
  />
  <div className="p-5 flex flex-col justify-between flex-grow overflow-hidden">
    <div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {robot.nombre}
      </h5>
      <p className="text-gray-700 dark:text-gray-400 mb-1">Creador: {robot.creador}</p>
      <p className="text-gray-700 dark:text-gray-400 mb-1">Origen: {robot.origen}</p>
      <p className="text-gray-700 dark:text-gray-400 mb-4">Bando: {robot.bando}</p>
    </div>

    <div className="flex flex-col gap-2">
      <button
        onClick={() => handleFavorite(robot._id)}
        className={`inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white ${
          isFavorite(robot._id)
            ? "bg-red-600 hover:bg-red-700 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
            : "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        } rounded-lg focus:ring-4 focus:outline-none`}
      >
        {isFavorite(robot._id) ? "Quitar de Favoritos" : "Agregar a Favoritos"}
      </button>

      {user?.role === "admin" && (
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(robot)}
            className="w-full px-3 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-700"
          >
            Editar
          </button>
          <button
            onClick={() => handleDelete(robot._id)}
            className="w-full px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-700"
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  </div>
</div>
  );
};

export default RobotCard;
