/*
- Створити 3 об'єкти які описують книги.
Поля об'єкту : title ,pageCount, genre, authors.
Поле "автори" - масив. Кожен автор має поля name,age
*/

let book_descript01 = {
    title:'White Fang',
    pageCount: 300,
    genre: 'novel',
    authors: {
        name: 'Jack London',
        age: 'RIP 1916'
    }
}
console.log(book_descript01);
console.log(book_descript01["authors"]);

let book_descript02 = {
    title:'The Da Vinci Code',
    pageCount: 350,
    genre: 'detective'
}
console.log(book_descript02);

let book_descript03 = {
    title:'12 rules of life',
    pageCount: 320,
    genre: 'psychology'
}
console.log(book_descript03);



/*
- Створити масив з 10 об'єктами які описують сутніть "користувач".
 Поля: name, username,password. Вивести в консоль пароль кожного
 користувача
*/
let users = [

    { user: {
            name: 'ivan',
            username: 'john_123',
            password: '2084dv'
        }

    },
    {   user: {
            name: 'vitya',
            username: 'john_123',
            password: 'alala537'
        }

    },
    {   user: {
            name: 'anna',
            username: 'john_123',
            password: 797944
        }

    },
    {   user: {
            name: 'ira',
            username: 'jhsdfkjsh_123',
            password: 2424
        }

    },
    {   user: {
            name: 'misha',
            username: 'misha_123',
            password: 90988
        }

    },
    {   user: {
            name: 'danya',
            username: 'john_123',
            password: 234243234
        }

    },
    {   user: {
            name: 'tanya',
            username: 'john_123',
            password: 32809409
        }

    },
    {   user: {
            name: 'luba',
            username: '879bmbm',
            password: '42092khk'
        }

    },
    {   user: {
            name: 'kolya',
            username: 'john_7897',
            password: 2889
        }

    },
    {   user: {
            name: 'petya',
            username: 'hgkjhgk97',
            password: 2084
        }

    },
];

    console.log(users);

    console.log(users[0].user['password']);
    console.log(users[1].user['password']);
    console.log(users[2].user['password']);
    console.log(users[3].user['password']);
    console.log(users[4].user['password']);
    console.log(users[5].user['password']);
    console.log(users[6].user['password']);
    console.log(users[7].user['password']);
    console.log(users[8].user['password']);
    console.log(users[9].user['password']);

    console.log(users);
