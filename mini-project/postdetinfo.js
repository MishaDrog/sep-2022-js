
//  7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .

    let url = new URL(location.href);
    let userPost = url.searchParams.get('post');
    console.log(url);
    console.log(userPost);
    let parse = JSON.parse(userPost);
    console.log(parse);



    const title = document.createElement('div');
    title.classList.add('title');
    document.body.append(title);
    title.innerText = 'post details page';


    const titleBlock = document.createElement('div');
    titleBlock.classList.add('title-block');
    document.body.append(titleBlock);
    titleBlock.appendChild(title);



const container = document.createElement('div');
    container.classList.add('container')
    document.body.append(container);

fetch(`https://jsonplaceholder.typicode.com/posts/${parse.id}`)
    .then( (resp) => resp.json())
    .then(posts => {


        for (const item in posts) {
            const  postInfo = document.createElement('div');
            postInfo.innerText = `${item} ${posts[item]}`;
            document.body.append(postInfo);

            if (typeof posts[item] !== 'object') {
                postInfo.innerText = `${item} - ${posts[item]}`;
            } else {
                postInfo.innerText = `${item} :`
                for (const key in posts[item]) {
                    const postInnerDiv = document.createElement('div');
                    if (typeof posts[item][key] !== 'object') {
                        postInnerDiv.innerText = `${key} - ${posts[item][key]}`;
                    } else {
                        postInnerDiv.innerText = `${key}:`;
                        for (const element in posts[item][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof posts[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element} - ${posts[item][key][element]}`;
                            }
                            postInnerDiv.append(htmlDivElement);
                        }
                    }
                    postInfo.append(postInnerDiv);
                }
            }
            container.append(postInfo);

        }

    });


        const containerComents = document.createElement('div');
        containerComents.classList.add('container-coments')
        document.body.append(containerComents);

        let postPage = document.createElement('div');
        postPage.classList.add('post-wrap');
        document.body.append(postPage);

        postPage.appendChild(titleBlock);
        postPage.appendChild(container);
        postPage.appendChild(containerComents);

   fetch(`https://jsonplaceholder.typicode.com/posts/${parse.id}/comments`)
       .then(response => response.json())
       .then(posts => {
           for (const post of posts) {


               for (const postKey in post) {
                   let div = document.createElement('div');
                   div.innerHTML = `<b>${postKey}: </b> ${post[postKey]}`
                   let commentBlock = document.createElement('div')
                   commentBlock.appendChild(div);
                   //div.classList.add('short-info-coments');

                   containerComents.append(div);



               }

           }
       });






// coments button

/*

fetch(`https://jsonplaceholder.typicode.com/posts/${parse.id}/comments`)
    .then( (resp) => resp.json())
    .then(posts => {
        for (const item in posts) {
            const  postInfo = document.createElement('div');

            postInfo.innerText = `${item} ${posts[item]}`;
            document.body.append(postInfo);
            if (typeof posts[item] !== 'object') {
                postInfo.innerText = `${item} - ${posts[item]}`;
            } else {
                postInfo.innerText = `${item} :`
                for (const key in posts[item]) {
                    const postInnerDiv = document.createElement('div');
                    if (typeof posts[item][key] !== 'object') {
                        postInnerDiv.innerText = `${key} - ${posts[item][key]}`;
                    } else {
                        postInnerDiv.innerText = `${key}:`;
                        for (const element in posts[item][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof posts[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element} - ${posts[item][key][element]}`;
                            }
                            postInnerDiv.append(htmlDivElement);
                        }
                    }
                    postInfo.append(postInnerDiv);
                }
            }
            document.body.append(postInfo);
        }
    });







/*
    let target = document.querySelector('.target');
    let button = document.querySelector('.button');
    button.onclick = function() {


        fetch(`https://jsonplaceholder.typicode.com/users/${parse.id}/posts`)
            .then((resp) => resp.json())
            .then(posts => {

                let div = document.createElement('div');

                for (const post of posts) {
                    let div = document.createElement('div');

                    div.innerText = userPost.title;




                    div.appendChild(div);


                }
                document.body.appendChild(div);
            });

    };

*/









// test code

/*
fetch(`https://jsonplaceholder.typicode.com/users/${parse.id}/posts`)
        .then( (resp) => resp.json())
        .then(posts => {
            for (const item of posts) {
                const  postInfo = document.createElement('div');

                postInfo.innerText = `${item} ${posts[item]}`;
                document.body.append(postInfo);
                if (typeof posts[item] !== 'object') {
                    postInfo.innerText = `${item} - ${posts[item]}`;
                } else {
                    postInfo.innerText = `${item} :`
                    for (const key in posts[item]) {
                        const postInnerDiv = document.createElement('div');
                        if (typeof posts[item][key] !== 'object') {
                            postInnerDiv.innerText = `${key} - ${posts[item][key]}`;
                        } else {
                            postInnerDiv.innerText = `${key}:`;
                            for (const element in posts[item][key]) {
                                const htmlDivElement = document.createElement('div');
                                if (typeof posts[item][key][element] !== 'object') {
                                    htmlDivElement.innerText = `${element} - ${posts[item][key][element]}`;
                                }
                                postInnerDiv.append(htmlDivElement);
                            }
                        }
                        postInfo.append(postInnerDiv);
                    }
                }
                document.body.append(postInfo);
            }
        });


*/











