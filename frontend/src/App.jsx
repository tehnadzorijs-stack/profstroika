import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// ======== СТРАНИЦЫ ========
function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Герой-секция */}
      <div className="text-center py-12 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl mb-12">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">
          Поступление в строительные вузы
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Платформа для подготовки, олимпиад и трудоустройства в строительной отрасли
        </p>
      </div>

      {/* Карточки модулей */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-600">
          <div className="text-4xl mb-4">📐</div>
          <h3 className="text-2xl font-bold text-blue-900 mb-2">СтройГТО</h3>
          <p className="text-gray-600 mb-4">Всероссийская олимпиада для школьников</p>
          <Link to="/olympiad" className="text-orange-600 font-semibold hover:text-orange-800">
            Узнать подробнее →
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-green-600">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">Волонтёрство</h3>
          <p className="text-gray-600 mb-4">Обучение служением и социальные проекты</p>
          <Link to="/volunteer" className="text-orange-600 font-semibold hover:text-orange-800">
            Узнать подробнее →
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-purple-600">
          <div className="text-4xl mb-4">💼</div>
          <h3 className="text-2xl font-bold text-purple-800 mb-2">Хантинг</h3>
          <p className="text-gray-600 mb-4">Трудоустройство выпускников</p>
          <Link to="/career" className="text-orange-600 font-semibold hover:text-orange-800">
            Узнать подробнее →
          </Link>
        </div>
      </div>

      {/* Блок-призыв */}
      <div className="mt-16 bg-blue-900 text-white p-10 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-2">Готовы начать?</h2>
        <p className="text-blue-200 mb-4">Присоединяйтесь к платформе и стройте своё будущее</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
}

function Olympiad() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-900 mb-6">🏆 Олимпиада «СтройГТО»</h2>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <p className="text-gray-700 text-lg mb-4">
          Всероссийская мультипредметная олимпиада для школьников в области строительства.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Регистрация открыта до 1 марта</li>
          <li>3 этапа: школьный, региональный, всероссийский</li>
          <li>Победители получают дополнительные баллы к ЕГЭ</li>
        </ul>
      </div>
    </div>
  );
}

function Volunteer() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-green-700 mb-6">🤝 Волонтёрский трек</h2>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <p className="text-gray-700 text-lg mb-4">
          Программа «Обучение служением» — совмещайте учёбу и социально значимые проекты.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Участие в строительстве социальных объектов</li>
          <li>Благоустройство городских пространств</li>
          <li>Баллы в портфолио для поступления</li>
        </ul>
      </div>
    </div>
  );
}

function Career() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-purple-700 mb-6">💼 Хантинг выпускников</h2>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <p className="text-gray-700 text-lg mb-4">
          Платформа для трудоустройства студентов и выпускников строительных специальностей.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>База вакансий от ведущих компаний отрасли</li>
          <li>Стажировки и практика</li>
          <li>Помощь в составлении резюме</li>
        </ul>
      </div>
    </div>
  );
}

// ======== ГЛАВНЫЙ КОМПОНЕНТ ========
function App() {
  return (
    <BrowserRouter>
      {/* НАВИГАЦИЯ */}
      <nav className="bg-blue-900 text-white p-4 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">🏗️ ПрофСтройка</h1>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-orange-300 transition-colors duration-200">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/olympiad" className="hover:text-orange-300 transition-colors duration-200">
                СтройГТО
              </Link>
            </li>
            <li>
              <Link to="/volunteer" className="hover:text-orange-300 transition-colors duration-200">
                Волонтёрство
              </Link>
            </li>
            <li>
              <Link to="/career" className="hover:text-orange-300 transition-colors duration-200">
                Карьера
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <main className="container mx-auto p-6 min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/olympiad" element={<Olympiad />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>

      {/* ПОДВАЛ */}
      <footer className="bg-blue-900 text-white text-center p-6">
        <p>© 2026 ПрофСтройка — платформа для поступления в строительные вузы</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
