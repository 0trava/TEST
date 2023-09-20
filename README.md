# Home Work in modul TypeScript.

### Налаштування 

1. Знайомлення з ТайпСкріпт
2. Налаштування tsconfig.json

~ ~ ~

Команди:
npm install -g typescript -> встановлення TypeScript
tsc --init -> Ця команда створить файл tsconfig.json, який містить стандартні налаштування TypeScript.
tsc -> компіляція
tsc test.ts -w  -> запуск програми реальному часі 
npm init -y -> встановлення сервера @web/dev-server
npm i --save-dev @web/dev-server -> і сам сервер
---Зробити налаштування package.json

npm start -> запуск програми

~ ~ ~
#### Налаштування tsconfig.json

~~~
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "allowJs": false,
    "allowSyntheticDefaultImports": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "lib": ["dom", "ES2021"], // Дом - для збірки
    "module": "es2020",
    "moduleResolution": "node",
    "preserveConstEnums": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "target": "es2019",
    "sourceMap": true, // Source Map — це файл, який браузер використовує для відображення транспільованого або мініфікованого коду назад у вихідний код.
  },
  "include": ["**/*.ts"]
}

~~~

#### Налаштування package.json, потрібно додати команду start

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

### Опис простих (скалярних) типів

let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue"; 
let empty: null = null;
let notParam: undefined = undefined;

Також не обов'язково вказувати тип даних, якщо ви передаєте його явно.

~~~
const num = 10;
const str = 'Some string';
const bool = true;
const empty = null;
const notParam = undefined;
~~~


### Опис Складні типи

const obj: object = {};
let arrString: string[];
let arrNumber: number[];
let arrAny: any[]; -> Але іноді нам це не потрібно, і тоді ми можемо скористатися типом даних any:
let data: any = fetchData();  -> any потенційно може являти собою будь-який тип даних.
let notSure: unknown = 4; -> Тип unknown підходить для сценаріїв, коли ви не знаєте точного типу даних, але все ж таки хочете підтримувати сувору перевірку типів. 
let tupleType: [string, boolean]; -> Кортеж, Він створюється як масив, але замість значень ми передаємо типи даних, наприклад, [string, number].

Ми можемо винести тип окремо за допомогою ключового слова type:
Загалом, типи та інтерфейси дозволяють покращити структуру та повторне використання коду, а також допомагають уникнути помилок за рахунок суворої типізації.

~~~
type User = {
  name: string;
  age: number;
};

let user: User = {
  name: 'Tom',
  age: 30,
};

let userJack: User = {
  name: 'Jack',
  age: 25,
};

export {};

***

type User = {
    name: string;
    age: number;
};

let users: User[] = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
];
~~~

### Enum

Ця структура настільки широко використовується, що в TypeScript вирішили додати її як тип даних. Цей тип називається enum і, згідно з хорошими практиками програмування, імена змінних цього типу мають починатися з великої літери.

~~~
enum Role {ADMIN, USER};

***
enum UserStatus {
 Active = 'ACTIVE',
 Inactive = 'INACTIVE',
 Banned = 'BANNED',
}
let status: UserStatus = UserStatus.Active;
~~~

### Union Type

Union Type у TypeScript дозволяє вказати, що значенням може бути один із кількох типів. Це дуже зручно, коли хочемо визначити змінну, яка може приймати різні типи даних. Типи перераховуються через вертикальну риску |

let mixedType: string | number | boolean;

~~~
function combine(param1: number | string, param2: number | string) {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

export {};
~~~


### Intersection Type

Intersection type є способом об'єднання декількох типів в один. Це дозволяє створювати складні типи, комбінуючи прості. У TypeScript можна використовувати символ & для створення типу intersection.

~~~

type Employee = {
  name: string;
  id: number;
};

type Manager = {
  employees: Employee[];
};

type CEO = Employee & Manager;

const ceo: CEO = {
  name: 'Alice',
  id: 1,
  employees: [
    {
      name: 'Bob',
      id: 2,
    },
  ],
};

export {};
~~~


Literal Type — це тип, що набуває конкретного значення. З ним ви можете визначити тип змінної так, щоб він набував лише певних значень.

Тут OneOrTwo може набувати лише значення 1 або 2, YesOrNo може набувати тільки значення "yes" або "no".
~~~

type OneOrTwo = 1 | 2;
let value: OneOrTwo;
value = 1; // OK
value = 2; // OK
value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.

type YesOrNo = 'yes' | 'no';
let answer: YesOrNo;
answer = 'yes'; // OK
answer = 'no'; // OK
answer = 'maybe'; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.

export {};
~~~



## Типи для методів та функцій

### Return Type

Return type — це тип даних, який функція повертає під час її виклику. TypeScript дозволяє вказувати тип значення, що повертається для функцій, що допомагає зробити ваш код більш зрозумілим і безпечним.

~~~

~~~