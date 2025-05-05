import { useState, useEffect } from "react";
import { createEvent, updateEvent } from "../api/events";

const EventForm = ({ robot, token, evento, onClose, onSave }) => {
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    if (evento) {
      setDescripcion(evento.descripcion);
      setFecha(evento.fecha?.split("T")[0]); // formato YYYY-MM-DD
    } else {
      setDescripcion("");
      setFecha("");
    }
  }, [evento]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = {
      descripcion,
      fecha,
      robot,
    };

    console.log(newEvent)

    try {
      if (evento) {
        await updateEvent(evento._id, newEvent, token);
      } else {
        await createEvent(newEvent, token);
      }
      onSave(); // notifica éxito y actualiza lista
    } catch (error) {
      console.error("❌ Error al guardar evento:", error);
    }
  };

  return (
    <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            {evento ? "Editar Evento" : "Agregar Evento"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Descripción</label>
            <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Descripción del evento"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows={3}
            />
            </div>

            <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Fecha</label>
            <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            </div>

            <div className="flex justify-end gap-2">
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-sm"
            >
                Guardar
            </button>
            <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-lg shadow-sm dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
            >
                Cancelar
            </button>
            </div>
        </form>
        </div>
  );
};

export default EventForm;
