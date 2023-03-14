//1

let str = '';

for (let i = 10; i <= 20; i++) {
    str += i + ',';
};

console.log(str);

//2

let str1 = '';

for (let y = 10; y <= 20; y++) {
    
    str1 += Math.pow(y, 2) + ',';

};

console.log(str1);

//3

let num = 1;

for (let z = 15; z <= 35; z++) {
    num *= z;
};

console.log(num);

//4

let num1 = 1;

for (let x = 1; x <= 500; x++) {

    num1 += x;

};

console.log(num1/500);

//5

let num2 = 30;

for (let a = 30; a <= 80; a++) {

    if (a % 2 === 0){
    num2 += a }
};

console.log(num2);

//6

let num3 = 100;
let str2 = '';

for (let b = 100; b <= 200; b++) {

    if (b % 3 === 0) {
        str2 += b + ',';
    };
};

console.log(str2);

//7
    
let number = prompt('Введите число');
let m = 0;
for(let i = 2; i <= number; i++) {
	if(number % i === 0){
		m += 1
	} 
};

console.log( m === 1 ? 'prime number' : 'complex number');
