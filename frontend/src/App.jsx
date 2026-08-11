import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Поступление в строительные вузы</h1>
      <p className="text-lg text-gray-700 mb-8">Платформа для подготовки, олимпиад и трудоустройства</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
          <h3 className="font-bold text-xl mb-2">📐 СтройГТО</h3>
          <p className="text-gray-600">Олимпиада для школьников</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
          <h3 className="font-bold text-xl mb-2">🤝 Волонтёрство</h3>
          <p className="text-gray-600">Обучение служением</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
          <h3 className="font-bold text-xl mb-2">💼 Хантинг</h3>
          <p className="text-gray-600">Работа для выпускников</p>
        </div>
      </div>
    </div>
  );
}

function Olympiad() {
  return <h2 className="text-3xl font-bold text-blue-900">🏆 Олимпиада «СтройГТО»</h2>;
}

function Volunteer() {
  return <h2 className="text-3xl font-bold text-green-700">🤝 Волонтёрский трек</h2>;
}

function Career() {
  return <h2 className="text-3xl font-bold text-purple-700">💼 Хантинг выпускников</h2>;
}

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
    </BrowserRouter>
  );
}

export default App;
