import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/UseFetch';
import { RecipeCard } from '../components/RecipeCard';
import type { Meal } from '../types';

export const Category = () => {
  const { name } = useParams();
  const { data, loading } = useFetch<{meals: Meal[]}>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {data?.meals.map(meal => <RecipeCard key={meal.idMeal} meal={meal} />)}
    </div>
  );
};


