import { useState } from "react";

const RobotForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    creador: "",
    universo_ficcion: "",
    descripcion: "",
    imagen_url: "",
    tipos: "",
    habilidades: "",
    roles: "",
    amigos: "",
    origen: "",
    bando: "",
    ...initialData
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      tipos: typeof formData.tipos === "string" ? formData.tipos.split(",").map((s) => s.trim()) : formData.tipos,
      habilidades: typeof formData.habilidades === "string" ? formData.habilidades.split(",").map((s) => s.trim()) : formData.habilidades,
      roles: typeof formData.roles === "string" ? formData.roles.split(",").map((s) => s.trim()) : formData.roles,
      amigos: typeof formData.amigos === "string" ? formData.amigos.split(",").map((s) => s.trim()) : formData.amigos,
    };
    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
      <input name="creador" placeholder="Creador" value={formData.creador} onChange={handleChange} required />
      <input name="universo_ficcion" placeholder="Universo Ficción" value={formData.universo_ficcion} onChange={handleChange} />
      <input name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={handleChange} />
      <input name="imagen_url" placeholder="Imagen URL" value={formData.imagen_url} onChange={handleChange} />
      <input name="tipos" placeholder="Tipos (separados por coma)" value={formData.tipos} onChange={handleChange} />
      <input name="habilidades" placeholder="Habilidades (separadas por coma)" value={formData.habilidades} onChange={handleChange} />
      <input name="roles" placeholder="Roles (separados por coma)" value={formData.roles} onChange={handleChange} />
      <input name="amigos" placeholder="Amigos (separados por coma)" value={formData.amigos} onChange={handleChange} />
      <input name="origen" placeholder="Origen" value={formData.origen} onChange={handleChange} />
      <input name="bando" placeholder="Bando (Héroe, Villano, Neutral)" value={formData.bando} onChange={handleChange} />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default RobotForm;
