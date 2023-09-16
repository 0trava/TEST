Class Work in modul TypeScript.


1. Знайомлення з ТайпСкріпт
2. Налаштування tsconfig.json

~ ~ ~

Команди:
npm install -g typescript -> встановлення TypeScript
tsc --init -> Ця команда створить файл tsconfig.json, який містить стандартні налаштування TypeScript.
tsc -> компіляція
npm init -y -> встановлення сервера @web/dev-server
npm i --save-dev @web/dev-server -> і сам сервер
---налаштування package.json
npm start - запуск програми
~ ~ ~
Налаштування package.json, потрібно додати команду start

~~~
{
  "name": "courses_ts",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "start": "web-dev-server --node-resolve --open --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@web/dev-server": "^0.2.1"
  }
}

~~~
