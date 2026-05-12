import { useFavorites } from '../context/FavoriteContext';
import { RecipeCard } from '../components/RecipeCard';

export const Favorites = () => {
  const { favorites } = useFavorites();
  return (
    <div>
      <h1>My Favorites</h1>
      <div >
        {favorites.map(meal => <RecipeCard key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};
