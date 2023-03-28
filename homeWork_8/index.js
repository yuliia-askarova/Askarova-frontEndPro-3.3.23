//1

const numbers = [1, 2, 3, 4, 5, 6, 7];
const numbers2 = [2, 5, 3, 1, 7, 6, 9];

function removeElement(array, item) {
    let index = array.indexOf(item);
    array.splice(index, 1);
}

removeElement(numbers, 5);
removeElement(numbers2, 1);
console.log(numbers);
console.log(numbers2);

//2

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let key = "";
    for (let i = 0; i < length; i++) {
        let randomNum = Math.floor(Math.random() * characters.length);
        key += characters[randomNum];
    }
    return key;
}
const key = generateKey(5, characters);
const key2 = generateKey(10, characters);
console.log(key);
console.log(key2);

//3

function removeLetter(str, arr) {
    let result = "";
    for (let char of str) {
        if (!arr.includes(char.toLowerCase())) {
            result += char;
        }
    }
    return result;
}

console.log(removeLetter("hello world", ['l', 'd']));
const str = removeLetter("Hello Guys! How Are You?", ['g', 'o', 'y', "h"]);
console.log(str);

//4

function foo() {
    let sum = 0;
    return function(num) {
       return sum += num;
    }
}

const sum = foo();
sum(3);
sum(5);
sum(10);





