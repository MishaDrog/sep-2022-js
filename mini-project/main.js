

const container = document.createElement('div');
document.body.append(container);

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        for (const item of value) {
            const usersBlock = document.createElement('div');
            usersBlock.innerText = `${item.id} - ${item.name}`;
            container.append(usersBlock);
            usersBlock.classList.add('user-container')
            container.classList.add('container')

            const anchor = document.createElement('a');
            anchor.innerText = `user details`;
            usersBlock.append(anchor);
            anchor.href = `userdetails.html?data=${item.id}`;


            anchor.classList.add('user-btn')
        }
    });


/*
В index.html
1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-userdetails.html, котра має детальну інфорацію про об'єкт на який клікнули


На странице user-userdetails.html:
4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку postdetinfo.html,
 котра має детальну інфу про поточний пост.

    На странице postdetinfo.html:
7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

Стилизація проєкта -
index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
    user-userdetails.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
    блоки з короткою іфною про post - в ряд по 5 .
    postdetinfo.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
    Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)

*/









