import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ====== ГЛАВНЫЙ БЛОК ====== */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            ПрофСтройка — поступление в строительные вузы
          </h1>
          <p className="text-xl text-gray-600 mb-12">Выбери свой путь в строительной отрасли</p>

          {/* ЧЕТЫРЕ ШАГА (как на Поступи Онлайн) */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
              <div className="text-3xl">1</div>
              <h3 className="font-bold">Профессия</h3>
              <p className="text-sm text-gray-600">Выбери, кем хочешь стать</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-500">
              <div className="text-3xl">2</div>
              <h3 className="font-bold">Профиль</h3>
              <p className="text-sm text-gray-600">Выбери направление</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
              <div className="text-3xl">3</div>
              <h3 className="font-bold">Специальность</h3>
              <p className="text-sm text-gray-600">Выбери программу</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-600">
              <div className="text-3xl">4</div>
              <h3 className="font-bold">Вуз</h3>
              <p className="text-sm text-gray-600">Выбери учебное заведение</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ПРОСТОЙ СПИСОК НАПРАВЛЕНИЙ ====== */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Направления подготовки
        </h2>
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-600">
            <h3 className="font-bold">Строительство</h3>
            <p className="text-sm text-gray-600">122 программы</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
            <h3 className="font-bold">Архитектура</h3>
            <p className="text-sm text-gray-600">87 программ</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-600">
            <h3 className="font-bold">Транспортное строительство</h3>
            <p className="text-sm text-gray-600">54 программы</p>
          </div>
        </div>
      </section>
    </div>
  );
}
