# bus-orel-front

Фронтенд сайта туристического агентства «ГалаТур» (Орёл) — [bus-orel.ru](https://bus-orel.ru).

## Стек

- **Nuxt 4** (SSR, `srcDir: 'src/'`) + **Vue 3** (Composition API, `<script setup>`)
- **TypeScript 5**
- **Pinia** — стейт-менеджер
- **Tailwind CSS 4** + SCSS
- **ESLint 9** (flat config) + **Prettier**
- Прочее: `@vueuse/nuxt`, `dayjs-nuxt`, `@nuxt/image`, `@nuxt/icon` (Lucide), `nuxt-svgo`, `nuxt-viewport`, `@nuxtjs/sitemap`, `@nuxtjs/robots`

Запросы к API проксируются на бэкенд через `routeRules` (`/api/**` → `BASE_URL`, см. `nuxt.config.ts`).

## Переменные окружения

Создайте `.env` по образцу [`.env.example`](.env.example):

| Переменная | Описание                                                                                 |
| ---------- | ---------------------------------------------------------------------------------------- |
| `BASE_URL` | Адрес бэкенд-API (обязательная)                                                          |
| `SITE_URL` | Публичный URL сайта для canonical/sitemap (необязательная, дефолт `https://bus-orel.ru`) |

## Команды

```bash
npm ci            # установка зависимостей (postinstall запустит nuxt prepare)
npm run dev       # dev-сервер на http://localhost:3000
npm run build     # продакшн-сборка (.output/)
npm run start     # запуск собранного сервера: node .output/server/index.mjs
npm run lint:js   # линтинг ESLint
npm run lint:fix  # линтинг с автофиксом
npm run typecheck # проверка типов (nuxi typecheck / vue-tsc)
npm run format    # форматирование Prettier
```

## Структура проекта

Исходники в `src/`, архитектура — Feature-Sliced Design:

```
src/
├── app/        # инициализация приложения (layouts, стили)
├── pages/      # страницы (роутинг Nuxt)
├── widgets/    # крупные композиционные блоки
├── features/   # пользовательские сценарии
├── entities/   # бизнес-сущности (tour, excursion и др.)
└── shared/     # переиспользуемый код (ui, lib, config)
```

Правила импорта — по FSD: слой может импортировать только из слоёв ниже
(`shared` ← `entities` ← `features` ← `widgets` ← `pages` ← `app`).

Подробности для контрибьюторов — в `AGENTS.md`.

## Деплой

CI (GitHub Actions, self-hosted раннер, `.github/workflows/node.js.yml`):

1. Джоба `checks` — на push в `master`/`develop` и на PR: `npm ci`, `lint:js`, `typecheck`, `build`.
2. Джоба `deploy` — только на push в `master` после успешных проверок: сборка и `pm2 restart front`.

Прод-запуск: Nitro `node-server` на порту 3000 под PM2 (`ecosystem.config.cjs`, cluster mode).
`.env` на сервере генерируется из секретов GitHub.
