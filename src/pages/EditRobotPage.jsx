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
    <div className="max-w-3xl m-4 mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Editar Robot
      </h1>
      <RobotForm initialData={robotData} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditRobotPage;
