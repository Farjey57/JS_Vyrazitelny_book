// ЧИСЛА
/* 
    состоят из битов. 64 бита использует JS
    Следовательно максимальное число это 2^64 степени.
    для плавающей точки используется несколько битов. для знака - ещё 1 бит
    Остается 61 бит
*/

console.log(2.99e5) // --> 299000

/* 
    Дробные числа теряют точность из-за ограничения в кол-ве символов. Целые числа, меньше 9 квадраллионов гарантированно точно вычисляются
*/

// СПЕЦИАЛЬНЫЕ ЧИСЛА
/*
    Infinity и -Infinity - бесконечность и минус бесконечность
    NaN - не число, обычно результат математической ошибки (пример: 0/0)
*/

console.log(Infinity) // --> Infinity
console.log(-Infinity) // --> -Infinity

console.log(Infinity-Infinity) // --> NaN 
console.log(-Infinity+Infinity) // --> NaN
console.log(0/0) // --> NaN
console.log(-Infinity/Infinity, 'Бесконечность на бесконечность')  // --> NaN

console.log(Infinity/0) // --> Infinity
console.log(0/Infinity) // --> 0

console.log(-Infinity-Infinity) // --> -Infinity

// СТРОКИ

/*
    Каждый символ -  Код Unicode - последовательность чисел. Следовательно вся строка это тоже последовательность чисел
    При этом каждый символ в JS - 16 бит. Это 2^16 символов, что примерно в 2 раза меньше, чем символов в Unicode. Поэтому некоторые символы, например смайлы, занимают два "знакоместа"
*/

'Строка', "и это строка", `и это строка`

/* 
    Строки можно складывать (конкатенация)
*/

console.log('Fa'+'ren'+'gate') // --> Farengate
console.log('Fa'/'fa') // --> NaN ошибка, можно только складывать

// Экранирование

/*
    Чтобы экранировать, необходимо перед символами ставить обратный слеш \
*/

console.log('Hi,\nmy name is Serg.') 
/* --> 
Hi,
my name is Serg. 
*/

// Литерал шаблона

/*
    Для создания шаблона используются обратные ковычки `${}`. ${} - сюда можно вставить любой объект, выражение, значение, которое затем преобразуется в строку
 */

console.log(`Бесконечность значит ${1/0}`)

// УНАРНЫЕ ОПЕРАТОРЫ

/*
    typeof x - возвращает строку, равную типу значения 
*/

console.log(typeof 4.5) // --> выведет строку number
console.log(typeof typeof true) // --> выведет строку string, т.к. результат typeof - строка

// ЛОГИЧЕСКИЙ ТИП
console.log('')
/*
    Логический(булев) тип - это True и False
    Получаются в результате выполнения логических выражений
    Строки сравниваются по алфавиту. большие буквы меньше строчных.
    Исключение NaN == NaN --> False, т.к. бессмысленное вычисление не равно дургому бессмысленному вычислению
*/

console.log(NaN == NaN) // --> false, исключение
console.log('fff' == 'fff') // --> true

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

/*
    && - логическое И
    || - логичесое ИЛИ
    ! - логическое НЕ (унарный оператор)

    Теранрынй оператор
    булевое значение ? значение1 : значение2
*/

console.log('gf'?4:5) // --> 4, второе значение т.к. непустая строка - это true

// ПУСТЫЕ ЗНАЧЕНИЯ

/*
    undefined и null. Можно рассматривать как взаимозаменяемые. Используются, когда нет осмысленного ответа, но нжно что-то вернуть.
*/

// ПРИВЕДЕНИЕ ТИПОВ

console.log(null == undefined) // --> true, т.к. взаимозаменяемые
console.log(null == 0) // --> false, т.к. null или undefined равны только друг другу и ничему больше

console.log(null === undefined) // --> false, строгое сравнение, проверяет сначала тип, потом значение