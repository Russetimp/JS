// const objectA = {
//     a: 10,
//     b: 20
// }
// const objectB  = objectA
// console.log(objectA)
// console.log(objectB)
// objectA.f = 30
// objectA.f = 0
// console.log(objectA)
// console.log(objectB)

// // !!!ОБЪЯВЛЕНИЕ ФУНКЦИИ ЧЕРЕЗ CONST!!! 1:35:25 (function допускает присваивание нового типа переменной, const-нет; имеет другую запись)
// function a () {
//     console.log('Hey there')
// }
// a()
// a = 10
// a()
// const b = () => {
//     console.log('Hey you')
// }
// b()

// // !!!ОБЪЕКТЫ!!! 1:48:50
// const myCity = {
//     country:'Russia',
//     city: 'Moscow',
//     popular: true
// }
// console.log('myCity.country:',myCity.country)
// console.log('myCity.city:', myCity.city)
// myCity.city = 'World'
// console.log('Изменили свойство `city`:', myCity.city)
// myCity.size = 'big'
// console.log('Удалили свойство `big`:',myCity)
// delete myCity.popular
// console.log('Удалили свойство `popular`:', myCity)
// // !!!Использование переменных!!!
// const userName = 'Илья'
// const age = 25
// const userProfile = {
//     userName: userName,
//     age: age,
//     height: 170
// }
// console.log(userProfile)
// const userName = 'Илья'
// const age = 25
// const userProfile2 = {
//     userName,
//     age,
//     height: 170
// }
// console.log(userProfile2)
