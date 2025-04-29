import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../api/auth";
import Swal from "sweetalert2";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginUser(form);
      const userData = { username: form.username }; // Luego podrías obtener más info
      login(token, userData);
      Swal.fire("¡Login exitoso!", "", "success");
    } catch (error) {
      Swal.fire("Error", error.response?.data?.error || "Algo salió mal", "error");
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Usuario" value={form.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
