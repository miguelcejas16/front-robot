import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import RobotCard from "../components/RobotCard";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Mis Robots Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No tienes robots favoritos aún.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {favorites.map((robot) => (
            <RobotCard key={robot._id} robot={robot} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
