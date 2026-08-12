import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ====== 1. ТРАЕКТОРИЯ (4 ШАГА) ====== */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4">
            Траектория поступления в строительные вузы
          </h1>
          <p className="text-center text-gray-600 text-lg mb-12">
            Построй свою карьеру в строительной отрасли
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="font-bold text-lg mb-2">1. Выбери профессию</h3>
              <p className="text-gray-600 text-sm">Архитектор, инженер, прораб</p>
              <Link to="/professions" className="text-blue-600 text-sm font-semibold hover:underline mt-2 inline-block">Начать →</Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-500">
              <div className="text-3xl mb-3">📐</div>
              <h3 className="font-bold text-lg mb-2">2. Выбери профиль</h3>
              <p className="text-gray-600 text-sm">Промышленное, гражданское</p>
              <Link to="/directions" className="text-blue-600 text-sm font-semibold hover:underline mt-2 inline-block">Начать →</Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-lg mb-2">3. Выбери специальность</h3>
              <p className="text-gray-600 text-sm">Строительство, архитектура</p>
              <Link to="/programs" className="text-blue-600 text-sm font-semibold hover:underline mt-2 inline-block">Начать →</Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-600">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold text-lg mb-2">4. Выбери вуз</h3>
              <p className="text-gray-600 text-sm">МГСУ, СПбГАСУ, НГАСУ</p>
              <Link to="/universities" className="text-blue-600 text-sm font-semibold hover:underline mt-2 inline-block">Начать →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 2. НАПРАВЛЕНИЯ ====== */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Строительные направления</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-600">
            <h3 className="font-bold text-blue-900">Строительство</h3>
            <p className="text-sm text-gray-600">122 программы • 21 578 мест</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
            <h3 className="font-bold text-blue-900">Архитектура</h3>
            <p className="text-sm text-gray-600">87 программ • 8 340 мест</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-600">
            <h3 className="font-bold text-blue-900">Транспортное строительство</h3>
            <p className="text-sm text-gray-600">54 программы • 6 210 мест</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-600">
            <h3 className="font-bold text-blue-900">Гидротехническое</h3>
            <p className="text-sm text-gray-600">32 программы • 3 780 мест</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-500">
            <h3 className="font-bold text-blue-900">Градостроительство</h3>
            <p className="text-sm text-gray-600">41 программа • 4 560 мест</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-indigo-600">
            <h3 className="font-bold text-blue-900">Промышленное</h3>
            <p className="text-sm text-gray-600">38 программ • 4 120 мест</p>
          </div>
        </div>
      </section>

      {/* ====== 3. ВУЗЫ ====== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Строительные вузы России</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-bold text-blue-900">МГСУ</h3>
              <p className="text-sm text-gray-600">Москва</p>
              <p className="text-orange-600 font-bold mt-2">от 120 000 ₽/год</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-bold text-blue-900">СПбГАСУ</h3>
              <p className="text-sm text-gray-600">Санкт-Петербург</p>
              <p className="text-orange-600 font-bold mt-2">от 95 000 ₽/год</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-bold text-blue-900">НГАСУ</h3>
              <p className="text-sm text-gray-600">Новосибирск</p>
              <p className="text-orange-600 font-bold mt-2">от 80 000 ₽/год</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-bold text-blue-900">КазГАСУ</h3>
              <p className="text-sm text-gray-600">Казань</p>
              <p className="text-orange-600 font-bold mt-2">от 75 000 ₽/год</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 4. ОЛИМПИАДЫ ====== */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Олимпиады для строителей</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2">Главная</span>
            <h3 className="font-bold text-blue-900">СтройГТО</h3>
            <p className="text-sm text-gray-600">Всероссийская олимпиада по строительству</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded mb-2">Вузовская</span>
            <h3 className="font-bold text-green-800">Архитектурный конкурс МГСУ</h3>
            <p className="text-sm text-gray-600">Для будущих архитекторов</p>
          </div>
        </div>
      </section>

      {/* ====== 5. СЕРВИСЫ ====== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Сервисы для поступающих</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 hover:bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="font-bold">Выбор профессии</h4>
            </div>
            <div className="text-center p-4 hover:bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="font-bold">Оценка шансов</h4>
            </div>
            <div className="text-center p-4 hover:bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">🔍</div>
              <h4 className="font-bold">Подбор вуза</h4>
            </div>
            <div className="text-center p-4 hover:bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">⚖️</div>
              <h4 className="font-bold">Сравнение вузов</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 6. СТАТИСТИКА ====== */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Строительное образование в России</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div><div className="text-5xl font-bold">87</div><p className="text-blue-200">вузов</p></div>
            <div><div className="text-5xl font-bold">45</div><p className="text-blue-200">колледжей</p></div>
            <div><div className="text-5xl font-bold">156 000</div><p className="text-blue-200">студентов</p></div>
            <div><div className="text-5xl font-bold">21 578</div><p className="text-blue-200">бюджетных мест</p></div>
          </div>
        </div>
      </section>

      {/* ====== 7. ПОДВАЛ ====== */}
      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© 2026 ПрофСтройка — платформа для поступления в строительные вузы</p>
          <p className="mt-2">СМИ, свидетельство Роскомнадзора ЭЛ № ФС 77 - 68911</p>
        </div>
      </footer>
    </div>
  );
}
