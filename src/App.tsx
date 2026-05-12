import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { RecipeDetails } from './pages/RecipeDetails';
import { Favorites } from './pages/Favorites';
import { FavoriteProvider } from './context/FavoriteContext';

/**
 * Define the appropriate route for each request usind the context provider
 */
function App() {
  return (
    <FavoriteProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
  );
}
export default App;
