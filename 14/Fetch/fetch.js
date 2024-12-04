//GET
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

// function workWithData(data){
        // response.text();
        // response.formData();
        // response.blob(); 
        // return data.json();
// }

fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body:JSON.stringify({
        body: "quia et su",
        id: 1,
        title: "Test",
        userId: 1        
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    }
})
.then(response=>response.json())
.then(data=>console.log(data));


fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'PUT',
    body:JSON.stringify({
        body: "put put put",
        id: 1,
        title: "Test put",
        userId: 1        
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    }
})
.then(response=>response.json())
.then(data=>console.log(data));


fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'DELETE'
})
.then(response=>response.json())
.then(data=>console.log(data));


fetch('htt://jsonplaceholder.typicode.com/psts/1',{
    method:'GET',
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':'Bearer your_token_here',
        'Cookie':'sessionId = your_session_id'
    }
})
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.error(`Помилка запиту ${error}`));