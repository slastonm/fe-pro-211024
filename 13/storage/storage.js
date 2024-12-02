
document.cookie ="user=Tom; SameSite=None; Secure";
document.cookie ="user=Den; SameSite=None; Secure";
document.cookie ="userPro=Bob; SameSite=Strict; Secure; expires=31 Dec 2024 23:59:59 GMT";

document.cookie ="userAge=John; SameSite=Strict; Secure; max-age=3600;"
document.cookie ="userAge=John; SameSite=Strict; Secure; max-age=0;"

console.log(document.cookie);

// localStorage
window.localStorage.setItem('userMenubState', false);
window.localStorage['Dynamic'] = 'Test value dynamic';
window.localStorage.simpleKey = 'Simple';

console.log(window.localStorage.getItem('simpleKey'));
console.log(window.localStorage.userMenubState);
console.log(window.localStorage['Dynamic']);

window.localStorage.simpleKey = 123;
let users= [
    {
        userName:'Tom'
    },
    {
        userName:'Tom2'
    }
];

window.localStorage.simpleKey = users;
// window.localStorage.user = JSON.stringify({testUser:'Den'});
window.localStorage.users = JSON.stringify(users);

console.log(window.localStorage.users);// String

let getStorage = JSON.parse(window.localStorage.users);

let toDoItem = {todo:'Milk', status: false};
window.localStorage.users = JSON.stringify(toDoItem);
getStorage.forEach(element => {
    console.log(element);
});

let containerEl = document.querySelector('.container')
function checkStorage(){
    console.log(window.localStorage.test);
    if(window.localStorage.test === undefined){
        window.localStorage.test = JSON.stringify([{
            userName:'Tom'
        },
        {
            userName:'Tom2'
        }]);
    }
    else{
        let getData = JSON.parse(window.localStorage.test);
        getData.forEach((item)=>{
            let pEl = document.createElement('p');
            pEl.innerHTML = item.userName;
            containerEl.appendChild(pEl);
        })
    }
}
checkStorage();

// window.localStorage.removeItem('simpleKey');
// window.localStorage.removeItem('users');
// window.localStorage.removeItem('userMenubState');
// window.localStorage.clear();

// sessionStorage
window.sessionStorage.setItem('userMenubStatSession', 'falseSession');
window.sessionStorage['DynamicSession'] = 'Test value dynamic SessionSessionSession';
window.sessionStorage.simpleKey = 'SimpleSessionSession';

console.log(window.sessionStorage.getItem('simpleKey'));
console.log(window.sessionStorage.userMenubStatSession);
console.log(window.sessionStorage['DynamicSession']);

// window.sessionStorage.clear();
window.sessionStorage.removeItem('userMenubStatSession');


