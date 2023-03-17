//1

let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;

    for (i = 0; i < arr.length; i++) {
        sum += arr [i]; 
    }

    console.log (sum);

let positiveNumber = arr.filter (function(number){
    return number > 0 
});
console.log (positiveNumber);
console.log (positiveNumber.length);

//2

let minValue = arr [0];

for ( let i = 1; i < arr.length; i++) {
    if (arr [i] <= minValue) {
        minValue = arr [i]
    };
};
console.log (minValue);

let min = arr.findIndex (function(_number){
    return _number === -63
});
console.log (min);

//3

let maxValue = arr [0];

for ( let i = 1; i < arr.length; i++) {
    if (arr [i] >= maxValue) {
        maxValue = arr [i]
    };
};
console.log (maxValue);


let max = arr.findIndex (function(_number){
    return _number === 76
});
console.log (max);

//4

let negativeNumber = arr.filter (function(number){
    return number < 0 
});
console.log (negativeNumber);
console.log (negativeNumber.length);

//5

let oddNum = arr.filter (function(number){
    if (number % 2 !== 0 && number > 0)
    return number 
});
console.log(oddNum.length);

//6

let evenNum = arr.filter (function(number){
    if (number % 2 === 0 && number > 0)
    return number 
});
console.log(evenNum.length);

//7

let evenSum = 0;

for (i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && i > 0) {
        evenSum += arr [i];
    }
}
console.log (evenSum);

//8

let oddSum = 0;

for (i = 0; i < arr.length; i++) {
    if (i % 2 !== 0 && i > 0) {
        oddSum += arr [i];
    }
}
console.log (oddSum);

//9 

let multiply = 1;

for (i = 0; i < arr.length; i++) {
    if (i > 0) {
        multiply *= arr[i];
    }
}
console.log (multiply);

//10

let maximum = arr [0];
let maxi = 0;

for ( let i = 1; i < arr.length; i++) {
    if (arr [i] >= maximum) {
        maximum = arr[i];
        arr[maxi] = 0;
        maxi = i;
    } else {
        arr[i] = 0;
    }
};
console.log (arr);














