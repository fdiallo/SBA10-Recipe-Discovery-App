import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Favorites } from './pages/Favorites';
import { FavoriteProvider } from './context/FavoriteContext';

function App() {
  return (
    <FavoriteProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
  );
}
export default App;
