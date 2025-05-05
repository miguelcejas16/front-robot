import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRobotById } from "../api/robots";
import { filterByRobot, deleteEvent } from "../api/events";
import EventForm from "../components/EventForm";
import { AuthContext } from "../context/AuthContext";

const DetailRobotPage = () => {
  const { id } = useParams();
  const { user ,token } = useContext(AuthContext);
  const [robot, setRobot] = useState(null);
  const [eventos, setEventos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [eventoEdit, setEventoEdit] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const robotData = await getRobotById(id, token);
      const eventList = await filterByRobot(id, token);
      setRobot(robotData);
      setEventos(Array.isArray(eventList) ? eventList : []);
    };
    fetchData();
  }, [id, token]);

  const handleDelete = async (eventId) => {
    await deleteEvent(eventId, token);
    setEventos(eventos.filter(e => e._id !== eventId));
  };

  const handleEdit = (evento) => {
    setEventoEdit(evento);
    setShowForm(true);
  };

  const handleSave = async () => {
    const updatedList = await filterByRobot(id, token);
    setEventos(updatedList);
    setShowForm(false);
    setEventoEdit(null);
  };

  if (!robot) return <p className="text-center text-gray-500">Cargando...</p>;

  return (
    <div className="max-w-6xl my-8 mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* IZQUIERDA: Info Robot */}
        <div>
          <img
            src={robot.imagen_url}
            alt={robot.nombre}
            className="w-full h-auto rounded-lg shadow"
          />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">{robot.nombre}</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2"><strong>Origen:</strong> {robot.origen}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Bando:</strong> {robot.bando}</p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">{robot.descripcion}</p>
        </div>

        {/* DERECHA: Eventos */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Eventos</h3>

            {/* SOLO para admin */}
            {user?.role === "admin" && (
              <button
                onClick={() => { setShowForm(true); setEventoEdit(null); }}
                className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
              >
                + Agregar Evento
              </button>
            )}
          </div>

          {/* Lista de eventos */}
          <ul className="space-y-4">
            {eventos.map((evento) => (
              <li
                key={evento._id}
                className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow flex justify-between items-start"
              >
                <div>
                  <p className="text-gray-800 dark:text-gray-200">{evento.descripcion}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(evento.fecha).toLocaleDateString()}
                  </p>
                </div>

                {/* SOLO para admin */}
                {user?.role === "admin" && (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(evento)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(evento._id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Eliminar
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* SOLO para admin */}
          {user?.role === "admin" && showForm && (
            <div className="mt-6 p-4 bg-gray-200 dark:bg-gray-600 rounded-lg shadow">
              <EventForm
                robotId={id}
                token={token}
                evento={eventoEdit}
                onClose={() => setShowForm(false)}
                onSave={handleSave}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailRobotPage;

