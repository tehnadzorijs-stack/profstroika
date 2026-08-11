import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Olympiad from './pages/Olympiad';
import Volunteer from './pages/Volunteer';
import Career from './pages/Career';

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-blue-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🏗️ ПрофСтройка</h1>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-200">Главная</Link></li>
            <li><Link to="/olympiad" className="hover:text-blue-200">СтройГТО</Link></li>
            <li><Link to="/volunteer" className="hover:text-blue-200">Волонтёрство</Link></li>
            <li><Link to="/career" className="hover:text-blue-200">Карьера</Link></li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto p-6 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/olympiad" element={<Olympiad />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>

      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
        © 2026 ПрофСтройка — платформа для поступления в строительные вузы
      </footer>
    </BrowserRouter>
  );
}

export default App;