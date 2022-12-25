



const titleWrap = document.createElement('div');
    titleWrap.classList.add('title-wrap')
document.body.append(titleWrap);

const containerTitle = document.createElement('div');
containerTitle.classList.add('container-title')
document.body.append(containerTitle);

titleWrap.appendChild(containerTitle);


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

