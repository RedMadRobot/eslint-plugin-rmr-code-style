# Правила оформления кода

<a name="contents"></a>
## Оглавление
[1. Общие правила;](#common)

[2. Именование;](#naming)

[3. Именование методов и функций;](#function-naming)

[4. Именование классов;](#class-naming)

[5. Строки;](#strings)

[6. Массивы;](#arrays)

[7. Объекты;](#objects)

[8. Методы, анонимные и именованные функции;](#funcs)

[9. Передача аргументов;](#args)

[10. Логические выражения](#logic)


<a name="common"></a> 
## 1. Общие правила
**1.1.** В качестве кодировки используется UTF-8.

**1.2.** Перенос строки - LF.

**1.3.** В конце файла обязателен перенос строки.

**1.4.** Отступы - 2 пробела, табуляция не применяется.

**1.5.** Длина строки не должна быть больше 120 символов.

**1.6.** В конце строк не должно быть пробелов.

**1.7.** Пустые строки могут быть использованы для логической группировки кода. Не должно быть больше одной пустой строки подряд.

**1.8.** Точка с запятой ```;``` ставится в конце каждой инструкции.

**1.9.** Всегда, когда возможно, для объявления переменных нужно использовать ```const```.

**1.10.** Конструкция ```with``` и метки ```label``` не используются.

**1.11.** В конце каждого файла должна быть одна пустая строка.

**1.12.** Используется синтаксис ES6/7: переменные объявляются только через ```const``` и ```let```, ```var``` не используется.

[К началу](#contents)

<a name="naming"></a>
## 2. Именование
**Варианты именования:**
```javascript
someVariable // Переменная
methodOrFunction // Метод или функция
instanceOfClass // Экземпляр класса
CONSTANT_VARIABLE // Константа
```
**2.1.** Переменные именуются в CamelCase.

**2.2.** Транслит и замена слов цифрами не используются.

**2.3.** Имя переменной начинается с маленькой буквы.

**Правильно:**
```javascript
const numberForYou = 5;
```
**Неправильно:**
```javascript
const number_for_you = 5;
const number4you = 5;
```
**2.4.** Имя должно ёмко отражать представляемое содержимое и быть максимально коротким. Если сделать *коротко и понятно* не получается, нужно в первую очередь делать *понятно*.

**Правильно:**
```javascript
function getSimpleNumbers(count) {
		// Функция возвращает массив простых чисел длины count
}
const simpleNumbers = getSimpleNumbers(10);
```
**2.5.** Если метод, в котором объявляется переменная, подразумевает абстрактное использование, имя переменной также должно быть по возможности абстрактным.

```javascript
const someItemId = 10;
const anotherInteger = 15;

// Правильно
function isOddNumber(number) {
    return number % 2 !== 0;
}

// Неправильно
function isOddNumber(id) {
    return id % 2 !== 0;
}

console.log(isOddNumber(someItemId));
console.log(isOddNumber(anotherInteger));
```
[К началу](#contents)

<a name="function-naming"></a> 
## 3. Именование методов и функций
**3.1.** Имена методов и функций начинаются с маленькой буквы.

**3.2.** Имя метода/функции должно начинаться с глагола и содержать краткое описание действия, которое совершает метод/функция.

**Примеры именования**
```javascript
extract
calculateValue
getItemById
prepareDataBeforeSend
```
**3.3.** Если трудно сформулировать имя метода/функции, это *может* быть признаком того, что метод/функция содержит слишком сложную логику и её имеет смысл разделить на несколько более простых методов/функций.

[К началу](#contents)

<a name="class-naming"></a> 
## 4. Именование классов
**4.1.** Имена классов должны начинаться с заглавной буквы.

**4.2.** Имя класса должно быть существительным и отражать роль класса в системе.

[К началу](#contents)

<a name="strings"></a> 
## 5. Строки
**5.1.** Строки заключаются в одинарные кавычки ```'```.
```javascript
const lyrics = 'Never gonna give you up, Never gonna let you down';
```
**5.2.** Если в строке встречается одинарная кавычка, она должна быть экранирована.
```javascript
const test = 'It shouldn\'t fail';
```

[К началу](#contents)

<a name="arrays"></a> 
## 6. Массивы
**6.1.** Пробел ставится только после запятой.
```javascript
const numbers = [1, 2, 3, 4, 5];
```

[К началу](#contents)

<a name="objects"></a> 
## 7. Объекты
**7.1.** Литералы объектов именуются в CamelCase с маленькой буквы.

**7.2.** Если в объекте содержится больше трёх параметров, их нужно переносить. Перенос также ставится после открывающей фигурной скобки и перед закрывающей.

**7.3.** Пробел ставится только после запятой ```,``` и двоеточия ```:```.

**Правильно**
```javascript
const item = {id: 5};
const car = {id: 10, name: 'Dodge', color: 'red'};
const person = {
	id: 15,
	firstName: 'John',
	lastName: 'Smith',
	age: 30
};
```
**Неправильно**
```javascript
const item = { id: 5 };
const car = {id:10,name:'Dodge',color:'red'};
const person = {id: 15, firstName: 'John', lastName: 'Smith', age: 30};
```

**7.4** Строковые литералы можно использовать в качестве ключей только в случае необходимости.

**Правильно**
```javascript
const obj = {
    id: 1
    key: 2,
    'item-key': 3
};
```
**Неправильно**
```javascript
const obj = {
    'id': 1
    'key': 2,
    'item-key': 3
};
```

**7.5** Выравнивание не используется.

**Правильно**
```javascript
const person = {
    id: 1
    name: 'John',
    age: 20
};
```
**Неправильно**
```javascript
const person = {
    id:     1
    name:   'John',
    age:    20
};
```

[К началу](#contents)

<a name="funcs"></a> 
## 8. Методы, анонимные и именованные функции
**8.1.** Пробел ставится только после запятой и с обеих сторон от знака ```=``` при объявлении значения по-умолчанию для аргумента.

**8.2.** Открывающая фигурная скобка пишется на той же строке, что и объявление функции и отделяется от списка аргументов пробелом.
```javascript
function getItems(limit, offset = 0) {
	...
}
```
**8.3.** Если у стрелочной функции один аргумент, он пишется без скобок.
```javascript
const handleEvent = event => { ... };
```

[К началу](#contents)

<a name="args"></a> 
## 9. Передача аргументов
**9.1.** При передаче аргументов следует избегать [Magic numbers](https://en.wikipedia.org/wiki/Magic_number_(programming)).

*Пример из WebGL (предлагается угадать без документации, что означает каждый аргумент):*
```javascript
glCtx.vertexAttribPointer(this._glHandler, 4, glCtx.FLOAT, false, 0, 0);
```
Чтобы избежать подобных ситуаций, следует использовать именованные параметры:
```javascript
glCtx.vertexAttribPointer(this._glHandler, {
    size: 4,
    type: glCtx.FLOAT,
    normalizeData: false,
    stride: 0,
    offset: 0
});
```
**9.2.** Именованные параметры так же следует использовать, если количество аргументов метода/функции больше трёх.

**9.3.** При передаче аргументов без именованных параметров следует использовать переменные вместо подстановки значения в вызов функции.

**Правильно**
```javascript
const limit = 30;
const offset = 0;

getItems(limit, offset);
```
**Неправильно**
```javascript
getItems(30, 0);
```
**9.4.** Сигнатуру функции желательно планировать так, чтобы аргументы со значениями по-умолчанию были в конце списка аргументов.

**Правильно**
```javascript
function getItems(limit, offset = 0) { ... }
```
**Неправильно**
```javascript
function getItems(offset = 0, limit) { ... }
```
Если такой порядок аргументов невозможен по семантическим или иным соображениям, следует также использовать именованные параметры.

**9.5.** Деструктуризация аргументов в заголовке функции допускается только в том случае, если их не больше 3-х. Если больше - нужно деструктуризировать внутри функции.

**Правильно**
```javascript
const getItems = ({limit, offset}) => { ... };
```
```javascript
const setItem = item => {
	const {
		id: itemId,
		title: itemTitle,
		description,
		value
	} = item;
	...
};
```
**Неправильно**
```javascript
const setItem = ({id: itemId, title: titleId, description, value}) => { ... };
```
```javascript
const setItem = ({
	id: itemId,
	title: titleId,
	description,
	value
}) => { ... };
```

[К началу](#contents)

<a name="logic"></a>
## 10. Логические выражения
**10.1.** В логических выражениях используется только строгое (не)равенство.
```javascript
if (value === 5) { ... }
```
```javascript
if (value !== 10) { ... }
```
**10.2.** Присваивания в логических выражениях не используются.

**Правильно:**
```javascript
const value = getIntegerValue();
if (value === 5) { ... }
```
**Неправильно:**
```javascript
let value;
if ((value = getBooleanValue()) === true) { ... }
```
**10.3.** Следует избегать [Yoda conditions](http://en.wikipedia.org/wiki/Yoda_conditions).

**Правильно:**
```javascript
if (value === true) { ... }
```
```javascript
if (value === 'hello') { ... }
```
**Неправильно:**
```javascript
if (true === value) { ... }
```
```javascript
if ('hello' === value) { ... }
```
**10.4.** Допускается использование коротких записей для проверки на ```undefined```, ```null``` или ```0```.
```javascript
if (value) { ... }
```
```javascript
if (!value) { ... }
```
**10.5.** Если два условия, идущих друг за другом, исключают друг друга, нужно использовать конструкцию ```if...else```.

**Правильно:**
```javascript
const value = true;

if (value) {
    actionIfTrue();
} else {
    actionIfFalse();
}
```
**Неправильно:**
```javascript
const value = true;

if (value) {
    actionIfTrue();
}

if (!value) {
    actionIfFalse();
}
```
**10.6.** Не следует использовать логические операторы вместо конструкции ```if...else```.

**Правильно**
```javascript
if (value) {
	actionIfTrue();
} else {
	actionIfFalse();
}
```
**Неправильно**
```javascript
value && actionIsTrue() || actionIfFalse();
```
**10.7.** Тело выражения всегда заключается в фигурные скобки и переносится на следующую строку. Открывающая фигурная скобка не переносится.

**Правильно**
```javascript
if (value) {
	return;
}
```
**Неправильно**
```javascript
if (value) return;
```
```javascript
if (value) { return; }
```
```javascript
if (value)
{
    return;
}
```

[К началу](#contents)