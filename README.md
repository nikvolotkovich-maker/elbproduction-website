# Elbproduction — сайт (версия на основе старого дизайна)

Всё содержимое (тексты, цифры, контакты, видео) меняется в **config.js** — HTML трогать не нужно.

## Файлы
- `index.html` — главная (весь дизайн и анимации)
- `config.js` — тексты, цифры, контакты, видео, клиенты в бегущей строке
- `impressum.html`, `datenschutz.html`, `404.html`
- `vercel.json`, `favicon.svg`

## Медиа, которые нужно загрузить (из старой папки сайта)
| Файл | Куда | Где на сайте |
|---|---|---|
| video1.mp4, video2.mp4, video3.mp4 | `videos/` | видео в телефоне |
| case-study-desktop.png, case-study-mobile.png | корень | блок «Case Study» (без файла блок скрыт) |
| process-01.jpg … process-06.jpg | `images/` | картинки в «6 шагах» (без файла картинка скрыта) |
| hand.png | корень | рука под телефоном |
| background-desktop.jpg, background-mobile.jpg | корень | фон футера |
| логотипы | `logos/` | только если добавишь их в `marquee` в config.js |

Видео сжимай до 5–10 МБ (GitHub через браузер принимает файлы до 25 МБ).

## Форма
formspree.io → New Form → скопируй ID → в config.js замени `DEINE_FORM_ID`.

## Impressum / Datenschutz
Заполни поля в оранжевой пунктирной рамке.
