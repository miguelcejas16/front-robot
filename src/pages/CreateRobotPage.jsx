import RobotForm from "../components/RobotForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { createRobot } from "../api/robots";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateRobotPage = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreate = async (robotData) => {
    try {
      await createRobot(robotData, token);
      Swal.fire("Robot creado exitosamente", "", "success");
      navigate("/");
    } catch (error) {
      Swal.fire("Error", error.response?.data?.error || "No se pudo crear el robot", "error");
    }
  };

  return (
    <div>
      <h2>Crear Nuevo Robot</h2>
      <RobotForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateRobotPage;
