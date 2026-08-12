import { Link } from 'react-router-dom';

export default function Olympiads() {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Олимпиады для строителей
      </h2>

      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2">
            Главная
          </span>
          <h3 className="font-bold text-blue-900">СтройГТО</h3>
          <p className="text-sm text-gray-600">Всероссийская олимпиада по строительству</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded mb-2">
            Вузовская
          </span>
          <h3 className="font-bold text-green-800">Архитектурный конкурс МГСУ</h3>
          <p className="text-sm text-gray-600">Для будущих архитекторов</p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <span className="inline-block bg-orange-600 text-white text-xs px-2 py-1 rounded mb-2">
            Школьная
          </span>
          <h3 className="font-bold text-orange-800">Юный строитель</h3>
          <p className="text-sm text-gray-600">Для 9-11 классов</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded mb-2">
            Международная
          </span>
          <h3 className="font-bold text-purple-800">Engineering Future</h3>
          <p className="text-sm text-gray-600">Строительные технологии</p>
        </div>
      </div>

      <div className="text-center mt-6">
        <Link to="/olympiad" className="text-blue-600 font-semibold hover:underline">
          Посмотреть все олимпиады →
        </Link>
      </div>
    </section>
  );
}
