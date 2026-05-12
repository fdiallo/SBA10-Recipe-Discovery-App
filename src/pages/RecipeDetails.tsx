import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/UseFetch';

export const RecipeDetails = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<any>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  if (loading) return <div>Loading...</div>;
  const meal = data?.meals[0];
  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} className="w-1/2" />
      <p>{meal.strInstructions}</p>
    </div>
  );
};

