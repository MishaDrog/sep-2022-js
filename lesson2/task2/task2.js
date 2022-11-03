
/*
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
*/
let arr;
arr = [11, 50, -123, 'ivan', 'anna', 'example' , 100500 , 9.999999 , true ] ;
console.log(arr);
arr[arr.length] = 'element';  /*додаю елемент до масиву */
console.log(arr.length);  /*к-ть елементів в масиві 10 */
/*виводжу елементи масиву в консоль починаючи з першого нульового і до 9го (разом 10 ел) */
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

/*

- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
*/
let book_description = {
    title:'White Fang',
    pageCount: 300,
    genre: 'novel'
}
console.log(book_description)

let book_description2 = {
    title:'The Da Vinci Code',
    pageCount: 350,
    genre: 'detective'
}
console.log(book_description2)

let book_description3 = {
    title:'12 rules of life',
    pageCount: 320,
    genre: 'psychology'
}
console.log(book_description3)

