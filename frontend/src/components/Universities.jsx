import { Link } from 'react-router-dom';

export default function Universities() {
  const universities = [
    { name: 'МГСУ', city: 'Москва', price: 120000, color: 'bg-blue-50' },
    { name: 'СПбГАСУ', city: 'Санкт-Петербург', price: 95000, color: 'bg-green-50' },
    { name: 'НГАСУ', city: 'Новосибирск', price: 80000, color: 'bg-orange-50' },
    { name: 'КазГАСУ', city: 'Казань', price: 75000, color: 'bg-purple-50' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Строительные вузы России
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {universities.map((uni, index) => (
            <div
              key={index}
              className={`${uni.color} p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow`}
            >
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-bold text-blue-900">{uni.name}</h3>
              <p className="text-sm text-gray-600">{uni.city}</p>
              <p className="text-orange-600 font-bold mt-2">
                от {uni.price.toLocaleString()} ₽/год
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/universities" className="text-blue-600 font-semibold hover:underline">
            Показать все вузы →
          </Link>
        </div>
      </div>
    </section>
  );
}
