import { useFetch } from '../../hooks/UseFetch';
import { Link } from 'react-router-dom';

export const Home = () => {

  const { data: catData } = useFetch<{ categories: any[] }>('https://www.themealdb.com/api/json/v1/1/categories.php');
  return (
    <div className="p-6">
     
        <section>
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {catData?.categories.map(cat => (
              <Link key={cat.idCategory} to={`/category/${cat.strCategory}`} className="relative group overflow-hidden rounded-lg">
                <img src={cat.strCategoryThumb} alt={cat.strCategory} className="w-full object-cover group-hover:scale-105 transition" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{cat.strCategory}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
  
    </div>
  );
};
