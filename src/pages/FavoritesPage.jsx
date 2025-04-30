import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import RobotCard from "../components/RobotCard";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="max-w-6xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Mis Robots Favoritos
      </h2>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-700 dark:text-gray-300">
          No tienes robots favoritos aún.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((robot) => (
            <RobotCard key={robot._id} robot={robot} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
