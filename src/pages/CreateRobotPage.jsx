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
    <div className="max-w-3xl m-4 mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Crear Robot
      </h1>
      <RobotForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateRobotPage;
