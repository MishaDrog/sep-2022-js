

let usersLists = document.querySelector('.users-lists')

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {

            let li = document.createElement('li');
            //  li.innerText = user.id + " " + user.name;
            usersLists.appendChild(li);

            let a = document.createElement('a');
            a.innerText = `${user.id} ${user.name}`
            a.href = 'user-info.html?id=' + user.id;
            li.appendChild(a);





        }
    });

