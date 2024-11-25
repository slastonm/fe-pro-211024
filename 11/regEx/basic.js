let simpeStr = /hi/;
let simpleYearPatern = /\d\d\d\d/;

let regClass = new RegExp('hi');
let regClassPatern = new RegExp("\d\d\d\d");

let textSearchPatern = "Lorem ipsum dolor 1945 sit amet consectetur adipisicing elit. Totam ipsam illum nihil eius magni iure 1975 praesentium nesciunt maiores. Atque dolorem laborum optio perspiciatis 1999 deleniti sequi excepturi error earum amet ipsa!";

let firstIndexSearch = textSearchPatern.search(simpleYearPatern);
console.log(firstIndexSearch);