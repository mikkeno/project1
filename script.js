// 18 lesson

'use strict';


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
    
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();


// let num = 20;

// function showFirstMessage(text) {
//    console.log(text);
//    console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//    return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
 //    let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello");
// };

// logger();


// 17 lesson


// const str = "teSt";
// console.log(str[2] = 'd');

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str); 

// const fruit = "some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello World";

// console.log(logg.slice(0, 4));

// console.log(logg.substring(0, 4));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


// lesson 19

function first() {
    //do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log(`Я прошел этот урок!`);
}

learnJS('JavaScript', done);

// lesson 20

// const obj = new Object();     один из вариантов

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

/* console.log(Object.keys(options).length); */

// console.log(options["colors"]["border"]);     // Shift + alt +A

// delete options.name;

// console.log(options);


let counter = 0;
for (let key in options) {
    if (typeof(options[key]) =='object') {
        for (let i in (options[key])) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]} `);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]} `);
        counter++;
    }
}    
console.log(counter);


// lesson 21

/* const arr = [1, 32, 23, 26, 9];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
} */
/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

/* arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */


/* arr.pop(); */
/* arr.push(10);

console.log(arr); */

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* for (let value of arr) {
    console.log(value);
} */

/* const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; ')); */




// lesson 22

/* let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
}; */

/* const copy = obj;  // это ссылка

copy.a = 10;

console.log(copy);
console.log(obj); */

/* function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; */

/* console.log(newNumbers);
console.log(numbers); */
/* 
const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);       // ctrl + A выделение всего кода

clone.d = 20; */

/* console.log(add);
console.log(clone); */

/* const oldArray = [`a`, `b`, `c`];
const newArray = oldArray.slice();

newArray[1] = `assasasasas`;
console.log(newArray);
console.log(oldArray);

const video = [`youtube`, `vimeo`, `rutube`],
      blogs = [`wordpress`, `livejournal`, `blogger`],
      internet = [...video, ...blogs, `vk`, `facebook`];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q}; */


// lesson 23 


