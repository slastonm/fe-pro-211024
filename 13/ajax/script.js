let xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.response);
        xhr.response.forEach(element => {
            let pEl = document.createElement('p');
            pEl.innerHTML = element.name;
            document.querySelector('h1').appendChild(pEl);
        });
    }
}
xhr.responseType = 'json';
xhr.send(null);


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))