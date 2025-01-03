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
