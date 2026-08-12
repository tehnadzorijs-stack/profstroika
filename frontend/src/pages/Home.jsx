import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ====== 1. ГЕРОЙ-СЕКЦИЯ (ШАГИ ТРАЕКТОРИИ) ====== */}
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
              <p className="text-gray-600 text-sm">Архитектор, инженер, прораб, сметчик</p>
              <Link to="/professions" className="text-blue-600 text-sm font-semibold hover:underline mt-2 inline-block">
                Начать →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-500">
              <div className="text-3xl mb-3">📐</div>
              <h3 className="font-bold text-lg mb-2">2. Выбери профиль</h3>
              <p className="text-gray-600 text-sm">Промышленное, гражданское, дорожное</p>
              <Link to="/directions" className="text-blue-600 text-sm font-semibold hover:underline mt-2 inline-block">
                Начать →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-lg mb-2">3. Выбери специальность</h3>
              <p className="text-gray-600 text-sm">Строительство, архитектура, транспорт</p>
              <Link to="/programs" className="text-blue-600 text-sm font-semibold hover:underline mt-2 inline-block">
                Начать →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-600">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold text-lg mb-2">4. Выбери вуз</h3>
              <p className="text-gray-600 text-sm">МГСУ, СПбГАСУ, НГАСУ и другие</p>
              <Link to="/universities" className="text-blue-600 text-sm font-semibold hover:underline mt-2 inline-block">
                Начать →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 2. БЛОК НАПРАВЛЕНИЙ (С КОЛИЧЕСТВОМ) ====== */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Строительные направления в вузах России
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-blue-600">
            <h3 className="font-bold text-blue-900">Строительство</h3>
            <p className="text-sm text-gray-600">122 программы • 21 578 мест</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-orange-500">
            <h3 className="font-bold text-blue-900">Архитектура</h3>
            <p className="text-sm text-gray-600">87 программ • 8 340 мест</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-green-600">
            <h3 className="font-bold text-blue-900">Транспортное строительство</h3>
            <p className="text-sm text-gray-600">54 программы • 6 210 мест</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-purple-600">
            <h3 className="font-bold text-blue-900">Гидротехническое строительство</h3>
            <p className="text-sm text-gray-600">32 программы • 3 780 мест</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-red-500">
            <h3 className="font-bold text-blue-900">Градостроительство</h3>
            <p className="text-sm text-gray-600">41 программа • 4 560 мест</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-indigo-600">
            <h3 className="font-bold text-blue-900">Промышленное строительство</h3>
            <p className="text-sm text-gray-600">38 программ • 4 120 мест</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link to="/directions" className="text-blue-600 font-semibold hover:underline">
            Показать все направления →
          </Link>
        </div>
      </section>

      {/* ====== 3. БЛОК ВУЗОВ (КАРТОЧКИ) ====== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Строительные вузы России
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-bold text-blue-900">МГСУ</h3>
              <p className="text-sm text-gray-600">Москва</p>
              <p className="text-orange-600 font-bold mt-2">от 120 000 ₽/год</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-bold text-blue-900">СПбГАСУ</h3>
              <p className="text-sm text-gray-600">Санкт-Петербург</p>
              <p className="text-orange-600 font-bold mt-2">от 95 000 ₽/год</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-bold text-blue-900">НГАСУ</h3>
              <p className="text-sm text-gray-600">Новосибирск</p>
              <p className="text-orange-600 font-bold mt-2">от 80 000 ₽/год</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-bold text-blue-900">КазГАСУ</h3>
              <p className="text-sm text-gray-600">Казань</p>
              <p className="text-orange-600 font-bold mt-2">от 75 000 ₽/год</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/universities" className="text-blue-600 font-semibold hover:underline">
              Показать все вузы →
            </Link>
          </div>
        </div>
      </section>

      {/* ====== 4. БЛОК ОЛИМПИАД ====== */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Олимпиады для строителей
        </h2>

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
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <span className="inline-block bg-orange-600 text-white text-xs px-2 py-1 rounded mb-2">Школьная</span>
            <h3 className="font-bold text-orange-800">Юный строитель</h3>
            <p className="text-sm text-gray-600">Для 9-11 классов</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded mb-2">Международная</span>
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

      {/* ====== 5. БЛОК СЕРВИСОВ ====== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Сервисы для поступающих
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 hover:bg-blue-50 rounded-xl transition-colors">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="font-bold">Выбор профессии</h4>
              <p className="text-sm text-gray-600">Тест на профориентацию</p>
            </div>
            <div className="text-center p-4 hover:bg-blue-50 rounded-xl transition-colors">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="font-bold">Оценка шансов</h4>
              <p className="text-sm text-gray-600">Калькулятор ЕГЭ</p>
            </div>
            <div className="text-center p-4 hover:bg-blue-50 rounded-xl transition-colors">
              <div className="text-4xl mb-3">🔍</div>
              <h4 className="font-bold">Подбор вуза</h4>
              <p className="text-sm text-gray-600">По параметрам</p>
            </div>
            <div className="text-center p-4 hover:bg-blue-50 rounded-xl transition-colors">
              <div className="text-4xl mb-3">⚖️</div>
              <h4 className="font-bold">Сравнение вузов</h4>
              <p className="text-sm text-gray-600">Совместимость</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 6. БЛОК ЖУРНАЛА (НОВОСТИ) ====== */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Журнал «ПрофСтройка» для абитуриента
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <span className="text-xs text-blue-600 font-bold">НОВОСТИ</span>
            <h4 className="font-bold mt-2">Новые правила приёма в строительные вузы</h4>
            <p className="text-sm text-gray-600 mt-2">Изменения в 2026 году</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <span className="text-xs text-orange-600 font-bold">СТАТЬИ</span>
            <h4 className="font-bold mt-2">Как выбрать профиль строительства</h4>
            <p className="text-sm text-gray-600 mt-2">Советы экспертов</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <span className="text-xs text-green-600 font-bold">РЕЙТИНГИ</span>
            <h4 className="font-bold mt-2">Топ-10 строительных вузов России</h4>
            <p className="text-sm text-gray-600 mt-2">По качеству образования</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <span className="text-xs text-purple-600 font-bold">СОБЫТИЯ</span>
            <h4 className="font-bold mt-2">Дни открытых дверей в МГСУ</h4>
            <p className="text-sm text-gray-600 mt-2">Расписание на март</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/blog" className="text-blue-600 font-semibold hover:underline">
            Посмотреть все статьи →
          </Link>
        </div>
      </section>

      {/* ====== 7. БЛОК СТАТИСТИКИ ====== */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Строительное образование в России
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold">87</div>
              <p className="text-blue-200">строительных вузов</p>
            </div>
            <div>
              <div className="text-5xl font-bold">45</div>
              <p className="text-blue-200">строительных колледжей</p>
            </div>
            <div>
              <div className="text-5xl font-bold">156 000</div>
              <p className="text-blue-200">студентов</p>
            </div>
            <div>
              <div className="text-5xl font-bold">21 578</div>
              <p className="text-blue-200">бюджетных мест</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 8. ПОДВАЛ (ФУТЕР) ====== */}
      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold mb-3">О САЙТЕ</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white">О проекте</Link></li>
                <li><Link to="/for-universities" className="hover:text-white">Вузам</Link></li>
                <li><Link to="/advertisers" className="hover:text-white">Рекламодателям</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">АБИТУРИЕНТАМ</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/professions" className="hover:text-white">Профессии</Link></li>
                <li><Link to="/universities" className="hover:text-white">Вузы</Link></li>
                <li><Link to="/olympiad" className="hover:text-white">Олимпиады</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">ДОКУМЕНТЫ</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="hover:text-white">Соглашения</Link></li>
                <li><Link to="/feedback" className="hover:text-white">Обратная связь</Link></li>
                <li><Link to="/add-university" className="hover:text-white">Добавить вуз</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">КОНТАКТЫ</h4>
              <p className="text-sm">📧 info@profstroika.ru</p>
              <p className="text-sm mt-2">© 2026 ПрофСтройка</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
            <p>СМИ, свидетельство Роскомнадзора ЭЛ № ФС 77 - 68911</p>
            <p className="mt-1">Правила цитирования и использования изображений</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
