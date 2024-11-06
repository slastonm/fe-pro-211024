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
    // this.info = function(){
    //     console.log(`Todo item info ${this.value} create data: ${this.data}`);
    // }
}
// let longArr = new Array(100);
TodoItem.prototype.info = function(){
    console.log(`Todo item info ${this.value} create data: ${this.data}`);
}
let myTodo = new TodoItem('Buy milk', '01.11.2024', false);
toDoItem.push(myTodo);
console.log(toDoItem);
console.log(myTodo);


myTodo.info();

// OOP

class BookClass {
    constructor(title, author, year){
        this._title = title;
        this._author = author;
        this._year= year;
    }
    // Methods
    getAllinfo(){
        console.log(`Book info: ${this._author} and ${this._title}`);
    }
    // Get
    get title(){
        return `Title book ${this._title}`;
    } 
    // Set
    set title(value){
        this._title = value; 
    }
    // Static
    static createDefaultBook(){
        return new BookClass('Unknow book', 'Unknow author', 'any year info');
    }
}

let myBook = new BookClass('Harry Potter 1', 'J.Rowling', 1990);
console.log(myBook);

myBook.getAllinfo();

// Get
console.log(myBook.title);
myBook.title = 'Spider Man';

console.log(myBook);

let defaltBook = BookClass.createDefaultBook();
console.log(defaltBook);
console.log(defaltBook.title);
defaltBook.getAllinfo();
// myBook.createDefaultBook();
// myBook.createDefaultBook;


// Інкапсуляція
class Product{
    constructor(name, price){
        this._name = name;
        this._price = price;
    }
    getProductInfo(){
        console.log(`${this._name} price: ${this._price} $`);
    }
}
let milk = new Product('milk', 1.5);
milk.getProductInfo();

// Наслідування
class ElectronicProduct extends Product{
    constructor(name, price, type){
        super(name, price);
        this._type = type;
    }
    getElectronicInfo(){
        console.log(`${this._name} is type ${this._type}`);
    }
}

let HPlaptop = new ElectronicProduct('HP', 900, 'laptop');
HPlaptop.getElectronicInfo();
HPlaptop.getProductInfo();

//Агрегаці (композиція)

class Basket{
    constructor(){
        this._products = [];
    }
    addProduct(product){
        this._products.push(product);
    }
    // Get
    get totalPrice(){
        let price = 0;
        this._products.forEach(item =>price+=item._price);
        return price;
    }
}

let userShopingBasket = new Basket();
userShopingBasket.addProduct(milk);
userShopingBasket.addProduct(HPlaptop);
console.log(userShopingBasket);
console.log(`Total shoping price ${userShopingBasket.totalPrice} $`);