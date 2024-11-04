const toDoItem = [];
// {
//     value:'buy milk',
//     data:'01.11.2024',
//     complete:false
// }

function TodoItem(value, data, status){
    this.value = value;
    this.data = data;
    this.status = status;
}
// let longArr = new Array(100);
let myTodo = new TodoItem('Buy milk', '01.11.2024', false);
toDoItem.push(myTodo);
console.log(toDoItem);
console.log(myTodo);