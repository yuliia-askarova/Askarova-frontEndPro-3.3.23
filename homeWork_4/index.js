// #1

let num1 = prompt('Введите любое число');

if (num1 === '') {
    alert( 0 );
} 

let num2 = prompt('Введите еще одно число');

if (num2 === '') {
    alert(22);
}

// #2

let num3 = (num1 > 0 && num2 > 0) ? 80 :  40;
alert(num3);

// #3

let empty = {};

// #4

if (num1>=90) {
    empty = {size: 'big'};
} else if (num1<=40) {
    empty = {size: 'small'};
} else {
    empty = {size: 'medium'};
}

alert(empty.size);

// #5

let value; 

// #6

switch (empty.size) {
    case 'big':
        value = (1000);
        break;
    case 'medium':
        value = (100);
        break;
    case 'small':
        value = (10);
        break;
}

alert(value);

// #7

let num4 = num1*num2*num3;

alert( num4 % 2 );

if (num4 % 2 != 0){
    alert('число не четное');
} else{
    if (num2 > 50) {
        alert(num2);
    }
}