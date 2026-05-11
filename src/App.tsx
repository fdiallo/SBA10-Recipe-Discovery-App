import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/pages/Home';

const Navbar = () => {
  return (
    <nav className="bg-orange-500 p-4 text-white flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-black italic">Home</Link>
    </nav>
  );
};

export default function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}
