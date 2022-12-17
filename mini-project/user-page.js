

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


