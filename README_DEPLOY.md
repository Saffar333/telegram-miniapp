# Telegram Mini App - Web Version

Веб-версия Telegram Mini App для деплоя на Vercel.

## Деплой на Vercel

### Вариант 1: Через GitHub (Рекомендуется)

1. Запушьте этот репозиторий на GitHub
2. Зайдите на [vercel.com](https://vercel.com)
3. Нажмите "New Project"
4. Импортируйте ваш GitHub репозиторий
5. Vercel автоматически определит настройки
6. Нажмите "Deploy"

### Вариант 2: Через Vercel CLI

```bash
# Установите Vercel CLI
npm i -g vercel

# Задеплойте проект
vercel
```

## После деплоя

1. Скопируйте URL вашего приложения (например, `https://your-app.vercel.app`)
2. Добавьте этот URL в `.env` файл бота:
   ```env
   WEBAPP_URL=https://your-app.vercel.app
   ```
3. Перезапустите бота

## Структура для Vercel

```
.
├── index.html      # Главная страница
├── style.css       # Стили
├── script.js       # JavaScript
├── vercel.json     # Конфигурация Vercel
└── README_DEPLOY.md # Эта инструкция
```

## Особенности

- Статический сайт без backend
- Работает с Telegram WebApp API
- Автоматический SSL от Vercel
- CDN для быстрой загрузки

## Локальное тестирование

Откройте `index.html` в браузере или используйте любой HTTP сервер:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve
```

## Поддержка

Vercel автоматически поддерживает:
- Автоматическое обновление при push в GitHub
- HTTPS сертификаты
- Global CDN
- Мгновенные rollback
