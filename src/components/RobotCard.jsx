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
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <img src={robot.imagen_url} alt={robot.nombre} width="100" />
      <h3>{robot.nombre}</h3>
      <p>{robot.creador}</p>
      <p>{robot.origen}</p>
      <p>{robot.bando}</p>
      <button onClick={handleFavorite}>
        {isFavorite(robot._id) ? "Quitar de Favoritos" : "Agregar a Favoritos"}
      </button>

      {user?.role === "admin" && (
        <>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </>
      )}
    </div>
  );
};

export default RobotCard;
