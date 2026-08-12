import { Link } from 'react-router-dom';

export default function Journal() {
  const articles = [
    { tag: 'НОВОСТИ', tagColor: 'text-blue-600', title: 'Новые правила приёма в строительные вузы', desc: 'Изменения в 2026 году' },
    { tag: 'СТАТЬИ', tagColor: 'text-orange-600', title: 'Как выбрать профиль строительства', desc: 'Советы экспертов' },
    { tag: 'РЕЙТИНГИ', tagColor: 'text-green-600', title: 'Топ-10 строительных вузов России', desc: 'По качеству образования' },
    { tag: 'СОБЫТИЯ', tagColor: 'text-purple-600', title: 'Дни открытых дверей в МГСУ', desc: 'Расписание на март' },
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Журнал «ПрофСтройка» для абитуриента
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <span className={`text-xs font-bold ${article.tagColor}`}>{article.tag}</span>
            <h4 className="font-bold mt-2">{article.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{article.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/blog" className="text-blue-600 font-semibold hover:underline">
          Посмотреть все статьи →
        </Link>
      </div>
    </section>
  );
}
