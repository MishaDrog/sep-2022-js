

const url = new URL(location.href);
const id = url.searchParams.get('data');


const container = document.createElement('div');
container.classList.add('container')
document.body.append(container);




fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
        for (const item in value) {

            const userDiv = document.createElement('div');
            if (typeof value[item] !== 'object') {

                userDiv.innerText = `${item} -- ${value[item]}`;
            } else {
                userDiv.innerText = `${item} :`

                for (const key in value[item]) {
                    const userInnerDiv = document.createElement('div');
                    if (typeof value[item][key] !== 'object') {
                        userInnerDiv.innerText = `${key} -- ${value[item][key]}`;


                    } else {
                        userInnerDiv.innerText = `${key} :`;

                        for (const element in value[item][key]) {

                            const htmlDivElement = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element} -- ${value[item][key][element]}`;

                            }
                            userInnerDiv.append(htmlDivElement);

                        }
                    }
                    userDiv.append(userInnerDiv);
                }
            }

            container.append(userDiv);
            // document.body.append(userDiv);

        }

    });













//let target = document.querySelector('.target');
//let button = document.querySelector('.button');


const containerTitle = document.createElement('div');
containerTitle.classList.add('container-title')
document.body.append(containerTitle);


let target = document.querySelector('.target');
let button = document.querySelector('.button');


button.onclick = function () {


    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(posts => {


            for (const post of posts) {
                let div = document.createElement('div');
                div.innerText = ` ${post.title} `;


                let a = document.createElement('a');
                a.innerText = 'details info about post';
                a.href = `postdetinfo.html?post=${JSON.stringify(post)}`;
                div.appendChild(a);


                document.body.appendChild(div);
                div.classList.add('short-info-post');

                containerTitle.appendChild(div);


            }

        });

};



























/*

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name}`;
            let a = document.createElement('a');
            a.href = `postdetinfo.html?id=${user.id}`;
            a.innerText = `posts of user`;
            div.appendChild(a);

            document.body.appendChild(div);

        }
    })
*/



/*

    const url = new URL(location.href);
    const id = url.searchParams.get('data');

    fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(value => {
            for (const item in value) {
                const userBlock = document.createElement('div');
                if (typeof value[item] !== 'object') {
                    userBlock.innerText `${item} -- ${value[item]}`;
                } else {
                    userInnerBlock.innerText = `${key} :`;

                    for (const element in value[item][key]) {
                        const htmlBlockElement = document.createElement('div');
                        if (typeof value[item][key][element] !== 'object') {
                            htmlBlockElement.innerText = `${element} -- ${value[item][key][element]}`;
                        }
                        userInnerBlock.append(htmlBlockElement);
                    }
                }
                userBlock.append(userInnerBlock);
            }
            document.body.append(userBlock);

        } );

*/
/*
let target = document.querySelector('.target');
let btn = document.querySelector('.btn');
btn.onclick = function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                let div = document.createElement('div');
                div.innerText = post.title;
                let a = document.createElement('a');
                a.innerText = 'details about post';
                a.href = 'postdetinfo.html?post=' + JSON.stringify(post);
                div.appendChild(a);
                document.body.appendChild(div);

            }
        });
    */

/*
let target = document.querySelector('.target');
let btn = document.querySelector('.btn');
btn.onclick = function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                let div = document.createElement('div');
                div.innerText = post.title;
                let a = document.createElement('a');
                a.innerText = 'details about post';
                a.href = 'postdetinfo.html?post=' + JSON.stringify(post);
                div.appendChild(a);
                document.body.appendChild(div);

            }
        });


 */