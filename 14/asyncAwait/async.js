
const posts= [
    {id:1, text:'Hello'},
    {id:2, text:'World'}
]

function getData(){
    setTimeout(()=>{
        let dataItem = '';
        posts.forEach((post)=>{
            dataItem+=`<p>${post.text}</p>`
        });
        document.body.innerHTML = dataItem;
    }, 2000)
}


function createData(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            let error = false;
            if(!error){
                resolve();
            }else{
                reject('Error in promise create post');
            }
        }, 3000);        
    })

}
// getData();

// asyn await
async function startPage() {
    await createData({id:3, text:'World new post'});
    getData();
}

startPage();
// console.log(console.log(post));
// createData({id:3, text:'World new post'})
// .then(getData)
// .catch(err=>console.log(err));

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => response.json())
// .then((json) => console.log(json));


async function fetchData() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json();
    console.log(data);

    let resPeople = await fetch('https://swapi.dev/api/people/');
    let peopleData = await resPeople.json();
    console.log(peopleData);

    
    let resStarships = await fetch('https://swapi.dev/api/people/1');
    let starshipsData = await resStarships.json();
    console.log(starshipsData);
}

fetchData();


// fetch('https://swapi.dev/api/people/')
// .then(response=>response.json())
// .then(data=>{
//     console.log(data);
// });

// id=1;
// fetch(`https://swapi.dev/api/people/${id}`)
// .then(response=>response.json())
// .then(data=>{
//     console.log(data.starships[0]);
//     fetch(`${data.starships[0]}`)
//         .then(response=>response.json())
//         .then(data=>{
//             console.log(data);
//         });
// });