import { Link } from 'react-router-dom';
import type { Meal } from '../types';
import { useFavorites } from '../context/FavoriteContext';

export const RecipeCard = ({ meal }: { meal: Meal }) => {
  const { addFavorite, removeFavorite, favorites } = useFavorites();
  const isFav = favorites.some(f => f.idMeal === meal.idMeal);

  return (
    <div >
      <br /><br /><img src={meal.strMealThumb} alt={meal.strMeal} /><br />
      <Link to={`/recipe/${meal.idMeal}`} >{meal.strMeal}<br /></Link>
      <button onClick={() => isFav ? removeFavorite(meal.idMeal) : addFavorite(meal)}>
        {isFav ? 'Unfavorite' : 'Favorite'}
      </button><br /><hr /><br />
    </div>
  );
};
