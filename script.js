"use strict";
// const greeting = 15
// const message = `${greeting}+${greeting}`
// console.log(message)

// // Преобразуются в false
// console.log ( Boolean (0))
// console.log ( Boolean (NaN))
// console.log ( Boolean (''))
// console.log ( Boolean (null))
// console.log ( Boolean (undefined))
// // Все остальные значения - в true

// const year = 3000
// const message = year === 2024
//  ? 'Начинаю учиться!'
//  : year === 3000
//     ? 'Нейросети победили'
//     : 'Неизвестный год:/'

// console.log(message);

const globalMessage = "Привет";

function logMessage(message = "Мяу", count) {
  const messageFormatted = `(((${message})))`;

  for (let i = 0; i < count; i++) {
    console.log(messageFormatted);
  }
}

logMessage(undefined, 3);
console.log(globalMessage);
 