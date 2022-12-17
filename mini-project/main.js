





    const container = document.createElement('div');

    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {

            const usersBlock = document.createElement('div');
            usersBlock.innerText = `${user.id} -- ${user.name}`;
            container.append(usersBlock);


            const anchor = document.createElement('a');
            anchor.innerText = `Click me`;
            usersBlock.append(anchor);
            anchor.href = `user-details.html?data=${user.id}`;


        }
    });
