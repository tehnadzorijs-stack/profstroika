import { Link } from 'react-router-dom';

export default function Footer() {
  return (
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
  );
}
