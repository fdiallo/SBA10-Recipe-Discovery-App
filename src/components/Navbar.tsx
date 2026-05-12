import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  const [search, setSearch] = useState('');
  return (
    <nav >
      <Link to="/"><br />RecipeDB<br /></Link><br />
      <div>
        <input 
          type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search recipes..."
          className="text-black p-1 rounded"
        />
        <Link to={`/search/${search}`}>Search</Link><br /><br />
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
};
