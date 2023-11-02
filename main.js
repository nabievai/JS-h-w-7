/*
1) Создать объект myBrowser со свойствами name (значение “Chrome”) и version (значение «9.2») - двумя способами
*/

// const myBrowser = {
//     name: 'Chrome',
//     version: 9.2
// }

// console.log(myBrowser)

// const myBrowser = new Object()

// myBrowser.name = "Chrome"
// myBrowser.version = "9.2"

// console.log(myBrowser)



// /*
// 2) Создать объект cinema со свойствами soldTickets (хранит в себе число, которое отображает 
// кол-во проданных билетов) и ticketCost (цена билета) и задайте значения. 
// Напишите функцию которая высчитывает сколько денег заработал кинотеатр за один сеанс.
// */

// const cinema = {
//     soldTickets: 157,
//     ticketCost: 245
// }

// function cinemaEarn(cinema) {
//     let earn = cinema.soldTickets * cinema.ticketCost
//     return earn
// }

// console.log(cinemaEarn(cinema))




/*
3) Напишите функцию, которая принимает в качестве аргумента объект и возвращает вложенный 
массив вида [[key, value], [key, value]]. 
То есть, если я вызову функцию objectToArr({ a: 1, b: 2 }), то результатом выполнения 
должен быть массив - [['a', 1], ['b', 2]]. 
Для решения этой задачи вам нужны будут следующие методы: Object.keys() или Object.entries()
*/

// function objectToArr(obj) {
//     const entriesObject = Object.entries(obj)
//     return entriesObject
//   }
  
//   const myObject = { a: 1, b: 2 }
//   const result = objectToArr(myObject)
//   console.log(result)
  


/*
4) Дан объект. Нужно извлечь число 123 одной строкой
*/

// const myCrazyObject = {
//     someArray: [7, 9, { purpose: "путаница", number: 123 }, 3.3],
// }

// const extractedNumber = myCrazyObject.someArray[2].number
// console.log(extractedNumber)

// const number = myCrazyObject.someArray.find(item => typeof item === 'object' && item.number === 123)?.number
// console.log(number)



/*
5) Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, 
null и т.п. Тут вам пригодится метод Array.isArray()
*/

// function isPlainObject(obj) {
//     return typeof obj === 'object' && !Array.isArray(obj) && obj !== null
//   }
  
//   console.log(isPlainObject({ a: 1 }))
//   console.log(isPlainObject([]))
//   console.log(isPlainObject(null))
//   console.log(isPlainObject("string"))
  


/*
6) Дан массив из имен например ['john', 'jane', 'kate', 'peter']. 
Вывести новый массив в котором каждая первая буква элемента будет с большой буквы.
*/

// const names = ['john', 'jane', 'kate', 'peter']

// const capitalizedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1))

// console.log(capitalizedNames)



/*
7) Сумма диапазона. Напишите функцию range, принимающую два аргумента, начало и конец диапазона, 
и возвращающую массив, который содержит все числа из него, включая начальное и конечное. 
Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. 
Запустите указанную выше инструкцию и убедитесь, что она возвращает сумму значений массива.
*/

// function range(start, end) {
//     const result = []
//     for (let i = start; i <= end; i++) {
//       result.push(i)
//     }
//     return result
//   }
  
//   function sum(arr) {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//       total += arr[i]
//     }
//     return total
//   }
  
//   const numbers = range(1, 5)
//   const totalSum = sum(numbers)
  
//   console.log(numbers)
//   console.log(totalSum)
  
  

/*
8) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, 
запишите результаты округления в объект с ключами 'floor' и 'ceil'. 
Можете все оформить в функцию, которая на входе будет принимать число и на выходе отдавать объект
*/

// function calculateSquareRootAndRound(number) {
//     const squareRoot = Math.sqrt(number)
//     const floorValue = Math.floor(squareRoot)
//     const ceilValue = Math.ceil(squareRoot)
    
//     return {
//       floor: floorValue,
//       ceil: ceilValue,
//     };
//   }
  
//   const result = calculateSquareRootAndRound(587)
//   console.log(result) 



/*
9) Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. 
С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'. 
Для работы понадобится for...in
*/

// const obj = {
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина'
// }

// for (const key in obj) {
//     console.log(`${key} – это ${obj[key]}`)
// }