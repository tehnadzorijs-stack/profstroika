# ПрофСтройка — платформа для поступления в строительные вузы

## 🚀 Быстрый старт

### 1. Настройка Supabase
- Создайте таблицы через SQL-редактор (скрипт в `database.sql`)
- Скопируйте URL и anon-ключ из **Settings → API**

### 2. Запуск локально
```bash
# Установите Python 3.10+
pip install -r requirements.txt
uvicorn backend.main:app --reload
