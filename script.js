// Инициализация Telegram WebApp
let tg = window.Telegram.WebApp;

// Расширяем приложение на весь экран
tg.expand();

// Настраиваем тему приложения
tg.setHeaderColor('#000000');
tg.setBackgroundColor('#000000');

// Переключение табов
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Убираем активный класс у всех табов
        tabs.forEach(t => t.classList.remove('active'));

        // Добавляем активный класс к нажатому табу
        tab.classList.add('active');

        // Скрываем весь контент
        contents.forEach(content => content.classList.add('hidden'));

        // Показываем нужный контент
        const targetId = tab.dataset.tab + '-content';
        document.getElementById(targetId).classList.remove('hidden');
    });
});

// Обработка нажатий на карточки
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.card-title').textContent;

        // Вибрация при нажатии (если доступна)
        if (tg.HapticFeedback) {
            tg.HapticFeedback.impactOccurred('light');
        }

        // Отправляем данные обратно в бот (опционально)
        tg.sendData(JSON.stringify({
            action: 'card_clicked',
            title: title
        }));

        // Показываем уведомление
        tg.showAlert(`Вы выбрали: ${title}`);
    });
});

// Уведомляем, что приложение готово
tg.ready();

// Обработка закрытия приложения
window.addEventListener('beforeunload', () => {
    tg.close();
});
