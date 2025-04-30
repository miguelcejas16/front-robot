import { useState } from "react";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      Swal.fire("¡Registro exitoso!", "Ya puedes iniciar sesión", "success");
    } catch (error) {
      Swal.fire("Error", error.response?.data?.error || "Algo salió mal", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-300 via-blue-600 to-blue-700">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Registro de Usuario
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Usuario"
              value={form.username}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-5 py-2.5 text-sm font-medium text-white bg-green-300 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Registrarse
          </button>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="w-full mt-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Volver a Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
