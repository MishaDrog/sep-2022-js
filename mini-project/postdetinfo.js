
//  7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .


    let url = new URL(location.href);
    let userPost = url.searchParams.get('post');
    console.log(url);
    console.log(userPost);
    let parse = JSON.parse(userPost);
    console.log(parse);


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







