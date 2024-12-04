let loader = document.querySelector('#loader');
let dataContainer = document.querySelector('#data');
let getBtn = document.querySelector('#loadData');

getBtn.addEventListener('click',function(){
    loader.style.display ='block';
    dataContainer.innerHTML = '';
    setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>{
            loader.style.display = 'none';
            console.log(data);
            data.forEach(element => {
                let article = document.createElement('article');
                article.innerHTML=`
                    <h4>${element.title}</h4>
                    <p>${element.body}</p>
                `;
                dataContainer.appendChild(article);
            });
        
        })
        .catch(error=>{
            console.log(error);
            dataContainer.innerHTML='Сталася помилка під час завантаження'
            loader.style.display = 'none';
        });
    }, 5000);

});

fetch('https://swapi.dev/api/')
.then(response=>response.json())
.then(data=>{
    console.log(data);
});

fetch('https://swapi.dev/api/people/')
.then(response=>response.json())
.then(data=>{
    console.log(data);
});

id=1;
fetch(`https://swapi.dev/api/people/${id}`)
.then(response=>response.json())
.then(data=>{
    console.log(data.starships[0]);
    fetch(`${data.starships[0]}`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
        });
});
