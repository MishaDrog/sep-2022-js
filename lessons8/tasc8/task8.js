/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)
*/
 function User(id, name, surname, email, phone) {
     this.id = id;
     this.name = name;
     this.surname = surname;
     this.email = email;
     this. phone = phone;
 }
    const user1 = new User( id:1, name: 'Ivan', surname: 'Ivanovuch', email: 'example@gmail.com', phone: '1442948564');
    const user2 = new User( id:2, name: 'Andryi', surname: 'Vasylyovuch', email: 'example1@gmail.com', phone: '3442222564');
    const user3 = new User( id:3, name: 'Vasya', surname: 'Mykhailovuch', email: 'example2@gmail.com', phone: '4442900064');
    const user4 = new User( id:4, name: 'Petya', surname: 'Antonovuch', email: 'example3@gmail.com', phone: '4442354564');

    const  arrayUsers = [];

    arrayUsers.push(user1, user2, user3, user4);

    const filter = arrayUsers.filter(value => value.id % 2 === 0);
    console.log(filter);


/*
- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
*/
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this. phone = phone;
}
const user1 = new User( id:1, name: 'Ivan', surname: 'Ivanovuch', email: 'example@gmail.com', phone: '1442948564');
const user2 = new User( id:2, name: 'Andryi', surname: 'Vasylyovuch', email: 'example1@gmail.com', phone: '3442222564');
const user3 = new User( id:3, name: 'Vasya', surname: 'Mykhailovuch', email: 'example2@gmail.com', phone: '4442900064');
const user4 = new User( id:4, name: 'Petya', surname: 'Antonovuch', email: 'example3@gmail.com', phone: '4442354564');

const  arrayUsers = [];

arrayUsers.push(user1, user2, user3, user4);

let filter = arrayUsers.filter(value => value.id % 2 === 0);

.
console.log(filter);

/*
- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
 */

console.log(arrayUsers.sort((a,b) => b.id - a.id));

/*
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
 об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


 */