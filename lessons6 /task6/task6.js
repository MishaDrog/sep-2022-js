
/*
- Знайти та вивести довжину наступних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'
*/
const message = 'hello world';
console.log(message.length);
// або одразу в console.log
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
/*
- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'
 */

const mes = 'hello world';
console.log(mes.toUpperCase());
let lorem = 'lorem ipsum';
console.log(lorem.toUpperCase());
let js = 'javascript is cool';
console.log(js.toUpperCase());
/*
- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
 */
const hel = 'HELLO WORLD';
console.log(hel.toLowerCase());
const lor = 'LOREM IPSUM';
console.log(lor.toLowerCase());
let cool = 'JAVASCRIPT IS COOL';
console.log(cool.toLowerCase());

/*
- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
*/

/*
let str = ' dirty string   ';

*/
/*
- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
*/
let str = 'Ревуть воли як ясла повні';
console.log(str.split());



/*
- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]


- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

описати колоду карт
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше


{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}


Додатково по reduce
Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
}


 */