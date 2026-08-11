import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Подключение к Supabase (использует переменные из .env)
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Проверка сессии
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user || null);
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        Поступление в строительные вузы
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Платформа для подготовки, олимпиад и трудоустройства
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
          <h3 className="font-bold text-xl mb-2">📐 СтройГТО</h3>
          <p className="text-gray-600">Олимпиада для школьников</p>
          <Link to="/olympiad" className="text-blue-600 hover:underline">Подробнее →</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
          <h3 className="font-bold text-xl mb-2">🤝 Волонтёрство</h3>
          <p className="text-gray-600">Обучение служением</p>
          <Link to="/volunteer" className="text-blue-600 hover:underline">Подробнее →</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
          <h3 className="font-bold text-xl mb-2">💼 Хантинг</h3>
          <p className="text-gray-600">Работа для выпускников</p>
          <Link to="/career" className="text-blue-600 hover:underline">Подробнее →</Link>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        {user ? (
          <p>👋 Вы вошли как {user.email}</p>
        ) : (
          <button 
            onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Войти через Google
          </button>
        )}
      </div>
    </div>
  );
}