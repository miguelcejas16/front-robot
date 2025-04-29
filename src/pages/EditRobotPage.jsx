import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getRobotById, updateRobot } from "../api/robots";
import { AuthContext } from "../context/AuthContext";
import RobotForm from "../components/RobotForm";
import Swal from "sweetalert2";

const EditRobotPage = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [robotData, setRobotData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRobot = async () => {
      try {
        const data = await getRobotById(id, token);
        setRobotData(data);
      } catch (error) {
        Swal.fire("Error", "No se pudo cargar el robot", "error");
      }
    };

    fetchRobot();
  }, [id, token]);

  const handleUpdate = async (updatedRobot) => {
    try {
      await updateRobot(id, updatedRobot, token);
      Swal.fire("Robot actualizado correctamente", "", "success");
      navigate("/");
    } catch (error) {
      Swal.fire("Error", "No se pudo actualizar el robot", "error");
    }
  };

  if (!robotData) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Editar Robot</h2>
      <RobotForm initialData={robotData} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditRobotPage;
