"use strict";

// // 2.4 Переменные
// // Задача_1
// let admin;
// let myName = "Джон";
// admin = myName;
// alert(admin);
// console.log(myName);

// planetEarth
// currentSiteUser

// // 2.5 Взаимодействие: alert, prompt, confirm
// let ageUser = prompt("Как тебя зовут?", "");
// alert (ageUser);

// // 2.10 Условное ветвление: if, '?'
// let number = prompt ("Введите число", "");
// if (number > 0) {
//     alert (1);
//     } else { if (number < 0) {
//       alert (-1);
//     } else {
//       alert (0)
//     };
// };
// let a = 1;
// let b = 2;
// let result = (a + b < 4) ? 'Мало':  'Много';
// alert (result);

// // 2.11 Логические операторы
// let user = prompt ("Кто там?", 1);
//  if (user === "Admin") {
//     let passwordAdmin = prompt ("Введите пароль", "");
//     if (passwordAdmin == "Я главный") {
//         alert("Здравствуйте")
//         } else if (passwordAdmin == "" || passwordAdmin== null) {
//         alert("Отменено")
//         } else alert ("Неверный пароль");
//     } else if (user == "" || user == null) {
//     alert ("Отменено");
//     } else  alert ("я вас не знаю");

// // 2.13 Циклы while и for Задача "Повторять цикл, пока ввод неверен" Моя вариация без пустой строки
// for (;;) {
// let number = prompt ("Введите число больше 100", "");
// if (number > 100 || number == null) {
//     alert (number);
//     break;}
// }

// // 2.15 Функции
// let from = "Аня";
// console.log( from );
//   function showMessage1(text) {
//     from = '*' + from + '*';
//     console.log( from + ': ' + text );
//   }
//   showMessage1("Привет");
//   console.log( from );

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

// // 4.1 Объекты.Задача.Сумма свойств объекта (Можно и без функции)
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// // let sum = function () {
// //     let sum = 0;
// //     for (let key in salaries) {
// //         sum = sum + salaries[key];
// //     };
// //     return sum;
// // };
// // salaries.sum = sum()
// // console.log(salaries.sum);

//     let sum = 0;
//     for (let key in salaries) {
//         sum += salaries[key];
//     };
//     console.log(sum);

// // //   Задача "Умножаем все числовые свойства на 2"
// // //   Можно избежать дополнительной вложенности из-за if
// // let menu = {
// //     width: 2.2,
// //     height: 300,
// //     title: "My menu"
// //   };
// //   function multiplyNumeric(obj) {
// //     for (let key in obj) {
// //         obj[key] = obj[key] * 2 || obj[key];
// //     }
// //   }
//   multiplyNumeric(menu);
//   console.log(menu);
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }

// // 4.4 Методы объекта, "this" Задачи
// let calculator = {
//     read () {
//         this.a = +prompt ("назови а", 2)
//         this.b = +prompt ("назови а", 2)
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b;
//       },
//   };
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

// // 4.5. Задача."Конструктор, оператор "new" Две функции - один объект'
// let obj = {a:1};
// function A() { return obj; }
// function B() { return obj; }
// let a = new A();
// let b = new B();
// console.log (obj);
// console.log (a);
// console.log (b);
// console.log (a == b);
// console.log (a === b);

// // 5.2 Числа Задача
// function readNumber() {
//     let num;
//     do {
//       num = prompt("Введите число", 0);
//     } while ( !isFinite(num) );
//     if (num === null || num === '') return null;
//     return +num;
//   }
//   console.log(`Число: ${readNumber()}`);

// function getRandomArbitrary(min, max) {
//     let a;
//     a = Math.random();
//     console.log (a);
//     a *= (max - min);
//     console.log (a);
//     a += min;
//     console.log (a);
//     return a;
//   }
//   getRandomArbitrary(1, 3);

// function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }
//   console.log ( randomInteger(1, 2) );

// // 5.3 Строки Задача
// function checkSpam(str) {
// let strLower = str.toLowerCase();
// console.log ( strLower.includes("viagra") || strLower.includes("xxx"))
// }
// checkSpam('buy ViAgRA now') ;
// checkSpam('free xxxxx') ;
// checkSpam("innocent rabbit");

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     str = str.slice(0, maxlength - 1) + "...";
//     console.log(str);
//   } else {
//     console.log(str);
//   }
// }
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);

// // 5.4 Массивы. Подмассив наибольшей суммы
// function getMaxSubSum(arr) {
//     let maxSum = 0; // если элементов не будет - возвращаем 0
//     for (let i = 0; i < arr.length; i++) {
//       let sumFixedStart = 0;
//       for (let j = i; j < arr.length; j++) {
//         sumFixedStart += arr[j];
//         maxSum = Math.max(maxSum, sumFixedStart);
//       }
//     }
//     return maxSum;
//   }
//   console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
//   console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
//   console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
//   console.log( getMaxSubSum([1, 2, 3]) ); // 6
//   console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100