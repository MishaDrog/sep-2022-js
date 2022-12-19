

let url = new URL(location.href);
console.log(url);

let id = url.searchParams.get('id');
console.log(id);

let apiURL = 'https://jsonplaceholder.typicode.com/users/';

fetch(apiURL + id)
    .then(response => response.json())
    .then((value) => {
        console.log(value);
    });

