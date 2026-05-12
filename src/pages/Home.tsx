
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/UseFetch';

/**
 * Use useFetch hook to fetch receipes by categories
 */
export const Home = () => {
  const { data, loading } = useFetch<{categories: any[]}>('https://www.themealdb.com/api/json/v1/1/categories.php');
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <br /><div>
        <section>
          <h2>Categories</h2><br />
          <div>
            {data?.categories.map(cat => (
              <Link key={cat.idCategory} to={`/category/${cat.strCategory}`} >
                 <div>
                  <span>{cat.strCategory}</span>
                </div>
                <img src={cat.strCategoryThumb} alt={cat.strCategory} />
               <hr />
                </Link>
            ))}
          </div>
        </section>
    </div>
    </div>
  );
};
