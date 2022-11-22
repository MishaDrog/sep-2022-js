
//- створити функцію яка обчислює та повертає
// площу прямокутника зі сторонами а і б
/*
Формула для обчислення площі прямокутника
s = a * b;
s = площа прямокутника
а = ширина;
b = довжина;

*/
/*
(a+b)*2
*/
/*
function perimetr (shorterSide, longerSide) {
    let result = (shorterSide + longerSide) * 2;
    console.log(result);

}
perimetr(3, 8);
*/
//- створити функцію яка обчислює та повертає площу
// кола з радіусом r=5
/*
function circle (p,r) {
    let result = (3.14 * r);
    return result;

}
let x = circle (3.14,25);
console.log(x);

*/

/*
let p = 3.14;
let r = (Math.pow(5,2));
console.log(Math.pow(5,2));
 */

// - створити функцію яка обчислює та повертає площу
// циліндру висотою h, та радіутом r
/*
 const cilinder = (r, h) => Math.PI * Math.pow(r, 2)* h;
 console.log(cilinder(5, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
 let arr = [1,2,3];
 function foo(array) {
  for (const item of array) {
     console.log(item);
  }
 }

 foo(arr);
/*
 //- створити функцію яка створює параграф з текстом.
// Текст задати через аргумент
/*
  function foo(text) {
    document.write(`<p>${text}</p>`);
  }
  foo('hello');
*/
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
/*
  function foo(text) {
    document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>>    
   
    `)
  }
    foo('hello world');

  */
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим
// (тут використовувати цикл)
/*
 function foo(text,num) {
  document.write(`<ul>`)
  for (let i = 0; i < num; i++){
      document.write(`<li>${text}</li>`);
  }
  document.write(`</ul>`);
 }
 foo('hello',10);

 */

// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список
/*
    let arr = [1,2, true, 'str'];
    const elem = function (array) {
        document.write(`<ul>`)
            for (item of array) {
               document.write(`<li>${item}</li>`);
            }
        document.write(`</ul>`)
    }
    elem(arr);
    */
// - створити функцію яка приймає масив об'єктів з наступними полями
// id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
/*
    const  arr = [
        {
            name: 'Vasya',
            age: 22
        },
        {
            name: 'Petya',
            age: 33
        },
        {
            name: 'Vanya',
            age: 35
        }
    ]
    const users = function (array) {
        for (const user of array) {
            document.write(`<div>${user.name} -- ${user.age}</div>`);
        }
    }
    users(arr);
*/
//  створити функцію яка повертає найменьше число з масиву
/*

    let arr = [1,3,5,5,5455643,5735,-22];

        function foo(array) {
            let min = array[0];
            for (const item of array) {
                if (item < min) {
                    min = item;
                }
            }
            return min;
        }
        let foo1 = foo(arr);
        console.log(foo1);
        */
/*
- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
*/
/*
        let arr = [1,2,10];
        function foo(array) {
            let sum = 0;
            for (const item of array) {
                sum += item; //  sum = sum + item
            }
            return sum;
        }
        console.log(foo(arr));

*/
        const array = ['first', 'second', 3442, 99393, -232, 123];

        for (let i = 2; i < array.length; i += 1); {
    console.log(array.length);
    console.log(array[0]);
        }

