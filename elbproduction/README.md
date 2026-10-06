# Elbproduction — сайт

Статический сайт (HTML/CSS/JS, без сборки). Vercel раздаёт его как есть.

## Структура
- `index.html` — Start
- `leistungen.html`, `portfolio.html`, `ueber-mich.html`, `kontakt.html`
- `impressum.html`, `datenschutz.html`, `404.html`
- `assets/style.css` — все стили (цвета в `:root` сверху)
- `assets/main.js` — меню, анимации, фильтр портфолио, форма
- `vercel.json` — красивые URL без `.html` (`/leistungen`)

## Что заменить перед запуском
1. **E-mail / телефон / Instagram** — найди и замени во всех `.html`:
   `hallo@elbproduction.de`, `+49 000 0000000`, `+490000000000`, `elbproduction`
2. **Impressum и Datenschutz** — оранжевые пунктирные поля = заполнить (имя, адрес, USt-ID).
   Datenschutz — шаблон, лучше прогнать через e-recht24 / datenschutz-generator.de.
3. **Форма** — зарегистрируйся на formspree.io (бесплатно), создай форму,
   в `kontakt.html` замени `DEINE_FORM_ID` на свой ID.
4. **Видео в портфолио** — положи файлы в `assets/videos/` и замени блок
   `<div class="ph">Video folgt</div>` на `<video src="/assets/videos/xxx.mp4" preload="metadata"></video>`.
   Сжимай до ~5–10 МБ (H.264, 1080×1920). `href="#"` у карточки можно заменить на ссылку на Reel в Instagram.
5. **Фото «Über mich»** — `assets/nikita.jpg`, замени `<div class="ph">Foto folgt</div>` на `<img src="/assets/nikita.jpg" alt="Nikita">`.

## Деплой на Vercel

### Вариант A — через GitHub (рекомендую: автодеплой при каждом изменении)
1. github.com → New repository → `elbproduction-website` → загрузи все файлы (Upload files, перетащить папку).
2. vercel.com → Sign up через GitHub → **Add New → Project** → выбери репозиторий.
3. Framework Preset: **Other**, Build Command пусто, Output Directory пусто → **Deploy**.
4. Через ~30 сек сайт живёт на `elbproduction-website.vercel.app`.

### Вариант B — без GitHub (Vercel CLI)
```
npm i -g vercel
cd elbproduction
vercel          # первый раз — логин и вопросы, всё по умолчанию
vercel --prod   # выкладка в продакшн
```

### Свой домен
Vercel → Project → Settings → **Domains** → добавь `elbproduction.de` →
у регистратора домена пропиши записи, которые покажет Vercel
(обычно `A  @  76.76.21.21` и `CNAME  www  cname.vercel-dns.com`). SSL включается сам.

## Локальный просмотр
```
npx serve .
```
