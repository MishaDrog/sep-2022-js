/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)
*/
/*
 function User(id, name, surname , email, phone) {
     this.id = id;
     this.name = name;
     this.surname = surname;
     this.email = email;
     this.phone = phone;
 }
    const user1 = new User(1, 'Vasya', 'Negrych', '9887777775');
    const user2 = new User(1, 'Vasya', 'Negrych', '9887777775');
    const user3 = new User(1, 'Vasya', 'Negrych', '9887777775');
    const user4 = new User(1, 'Vasya', 'Negrych', '9887777775');

    const arrayUsers = [];

    arrayUsers.push(user1,user2,user3,user4);

    let filter = arrayUsers.filter(value => value.id % 2 === 0);
    console.log(filter);

    */
/*
- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
*/

/*
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const user1 = new User(1, 'Vasya', 'Negrych', 'example@gmail.com', '9887777775');
const user2 = new User(2, 'Vasya', 'Negrych', 'exam77le@gmail.com','9887334775');
const user3 = new User(3, 'Vasya', 'Negrych', 'exa1ple@gmail.com', '9887947775');
const user4 = new User(4, 'Vasya', 'Negrych', 'exampl3@gmail.com', '9887204775');

const arrayUsers = [];

arrayUsers.push(user1,user2,user3,user4);

let filter = arrayUsers.filter(value => value.id % 2 === 0);
console.log(filter);
console.log(arrayUsers.sort((a,b) => b.id - a.id));
*/


/*
- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
 */
/*
    class Client {
        constructor(id, name, surname , email, phone) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order;
        }
    }

const user1 = new User(1, 'Vasya', 'Negrych', 'example@gmail.com', '9887777775');
const user2 = new User(2, 'Vasya', 'Negrych', 'exam77le@gmail.com','9887334775');
const user3 = new User(3, 'Vasya', 'Negrych', 'exa1ple@gmail.com', '9887947775');
const user4 = new User(4, 'Vasya', 'Negrych', 'exampl3@gmail.com', '9887204775');

const arrayUsers = [];

arrayUsers.push(user1,user2,user3,user4);
*/
/*
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
 */

    function Car(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;

        this.engine = function () {
            console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
        }
        this.info = function () {
            for (const carKey in this) {
                if (typeof this[carKey] === 'function') {
                    console.log(`${carKey} -- ${this[carKey]}`);

                }

            }
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed += newSpeed;
        }
        this.changeYear = function (newValue) {
            this.year += newValue;
        }
        this.addDriver = function (driver) {
            this.driver = driver;
        }

    }

  const car = new Car('Audi','Germany','2010', 200,2.5);

    console.log(car);
    car.engine();
    car.info();
    car.increaseMaxSpeed(100);
    car.changeYear(2021);
    car.addDriver('Ivan');
/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

/*
- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
 об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/

function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;

}

    const cinderella1 = new Cinderella('Tanya', 23, 32);
    const cinderella2 = new Cinderella('Luba', 29, 33);
    const cinderella3 = new Cinderella('Nica', 25, 34);
    const cinderella4 = new Cinderella('Vika', 27, 23);

    const arrayOfCinderella = [];
    arrayOfCinderella.push(cinderella1,cinderella2,cinderella3,cinderella4);

    console.log(arrayOfCinderella);
/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


 */