import { useState } from "react";
import { registerUser } from "../api/auth";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [form, setForm] = useState({ username: "", password: "" });

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
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Usuario" value={form.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterPage;
