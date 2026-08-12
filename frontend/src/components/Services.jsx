export default function Services() {
  const services = [
    { icon: '🧠', title: 'Выбор профессии', desc: 'Тест на профориентацию' },
    { icon: '📊', title: 'Оценка шансов', desc: 'Калькулятор ЕГЭ' },
    { icon: '🔍', title: 'Подбор вуза', desc: 'По параметрам' },
    { icon: '⚖️', title: 'Сравнение вузов', desc: 'Совместимость' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Сервисы для поступающих
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-4 hover:bg-blue-50 rounded-xl transition-colors"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h4 className="font-bold">{service.title}</h4>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
