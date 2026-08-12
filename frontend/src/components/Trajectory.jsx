import { Link } from 'react-router-dom';

export default function Trajectory() {
  return (
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
            <Link to="/professions" className="text-blue-600 text-sm font-semibold hover:underline mt-2 inline-block">
              Начать →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-500">
            <div className="text-3xl mb-3">📐</div>
            <h3 className="font-bold text-lg mb-2">2. Выбери профиль</h3>
            <p className="text-gray-600 text-sm">Промышленное, гражданское</p>
            <Link to="/directions" className="text-blue-600 text-sm font-semibold hover:underline mt-2 inline-block">
              Начать →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-bold text-lg mb-2">3. Выбери специальность</h3>
            <p className="text-gray-600 text-sm">Строительство, архитектура</p>
            <Link to="/programs" className="text-blue-600 text-sm font-semibold hover:underline mt-2 inline-block">
              Начать →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-600">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="font-bold text-lg mb-2">4. Выбери вуз</h3>
            <p className="text-gray-600 text-sm">МГСУ, СПбГАСУ, НГАСУ</p>
            <Link to="/universities" className="text-blue-600 text-sm font-semibold hover:underline mt-2 inline-block">
              Начать →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
