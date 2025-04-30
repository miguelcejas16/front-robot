import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NotFoundPage() {

    const navigate = useNavigate();
  
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
        Página no encontrada
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
        Lo sentimos, la página que estás buscando no existe o fue movida.
        </p>
        <Link
        to="/"
        className="px-6 py-2 text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm font-medium transition"
        >
        Volver al inicio
        </Link>
    </div>
    );
}
