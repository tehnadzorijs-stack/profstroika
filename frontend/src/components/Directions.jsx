import { Link } from 'react-router-dom';

export default function Directions() {
  const directions = [
    { name: 'Строительство', programs: 122, places: 21578, color: 'blue' },
    { name: 'Архитектура', programs: 87, places: 8340, color: 'orange' },
    { name: 'Транспортное строительство', programs: 54, places: 6210, color: 'green' },
    { name: 'Гидротехническое строительство', programs: 32, places: 3780, color: 'purple' },
    { name: 'Градостроительство', programs: 41, places: 4560, color: 'red' },
    { name: 'Промышленное строительство', programs: 38, places: 4120, color: 'indigo' },
  ];

  const colorClasses = {
    blue: 'border-l-4 border-blue-600',
    orange: 'border-l-4 border-orange-500',
    green: 'border-l-4 border-green-600',
    purple: 'border-l-4 border-purple-600',
    red: 'border-l-4 border-red-500',
    indigo: 'border-l-4 border-indigo-600',
  };

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Строительные направления в вузах России
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {directions.map((dir, index) => (
          <div
            key={index}
            className={`bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow ${colorClasses[dir.color]}`}
          >
            <h3 className="font-bold text-blue-900">{dir.name}</h3>
            <p className="text-sm text-gray-600">
              {dir.programs} программ • {dir.places.toLocaleString()} мест
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link to="/directions" className="text-blue-600 font-semibold hover:underline">
          Показать все направления →
        </Link>
      </div>
    </section>
  );
}
