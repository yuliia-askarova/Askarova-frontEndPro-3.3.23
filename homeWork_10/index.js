//1

const yourFunc = (arr) => {
  let uniqueNum = [];
  for (let item of arr) {
    if (!uniqueNum.includes(item)) {
      uniqueNum.push(item);
    }
  }
  return uniqueNum;
};

const arr1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const arr2 = [5, 8, 6, 7, 7, 9, 7, 7];

console.log(yourFunc(arr1)); // [1,2,3,4,5]
console.log(yourFunc(arr2));

//1

const arr3 = [1, 3, 3, 1, 1, 2, 2, 2, 3, 3, 1, 3, 4, 4, 4, 4, 3, 4];

let [num1] = arr3;

let set = new Set(arr3);

console.log(Array.from(set));

//2

function findMostFrequent(arr) {
  let obj = {};
  let max = 0;
  let result = arr[0];

  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1;

    if (obj[num] > max) {
      max = obj[num];
      result = num;
    }
  }

  console.log(obj);
  console.log(max);
  console.log(result);

  return result;
}

console.log(findMostFrequent(arr3));

//3

let y = 5;
let x = () => y;
let z = t => {
  let y = 5;
  t();
};
z(x);

// Выражение ничего не возвращает так как функция z это стрелочная функция 
// и для того чтобы она что то возвращала нужно в теле функции указать return.
// Если функция ничего не возвращает значит она возвращает undefined.

//4

// ??????????
// Не могу решить 