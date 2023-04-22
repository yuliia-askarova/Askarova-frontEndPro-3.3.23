// 1

let alfabet = "abcdefghijklmnopqrstuvwxyz";

function solution(str) {
  for (let item of alfabet) {
    if (!str.includes(item)) {
      return false;
    }
  }

  return true;
}

console.log(solution("wyyga"));
console.log(solution("qwertyuioplkjhgfdsazxcvbnm"));
console.log(solution("ejuxggfsts"));
console.log(solution("qpwoeirutyalskdjfhgmznxbcv"));
console.log(solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv"));
console.log(solution("0123456789abcdefghijklmnop"));

// //2

function makeSolution([arr]) {
  const newArr = arr.replace(/,/g, "").split(" ");

  const total = newArr.reduce((total, string) => {
    return total + string.length;
  }, 0);

  return newArr.filter(item => item.length >= total / newArr.length);
}

console.log(makeSolution(["This is a sample string"]));
console.log(makeSolution(["Some another sample"]));
console.log(makeSolution(["Do, do, do, do... do it!"]));


// // function makeSolution2([arr]) {
// //   let newArr = arr.replace(/,/g, "").split(" ");

// //   let lengths = newArr.map((item) => item.length);

// //   let sum = 0;
// //   lengths.forEach((item) => {
// //     sum += item;
// //   });

// //   let result1 = Math.round(sum / lengths.length);

// //   let result = [];
// //   newArr.find((item) => {
// //     if (item.length >= result1) {
// //       result.push(item);
// //     }
// //   });

// //   return result;
// // }

// // console.log(makeSolution2(["This is a sample string"]));
// // console.log(makeSolution2(["Some another sample"]));
// // console.log(makeSolution2(["Do, do, do, do... do it!"]));


// //3

const database = {
  password: 'ghjjk',
  getPassword: function (role) {
    if(role === 'admin') {
      return this.password;
    } 
    return 'You dont have access'; 
  },
  users: [],
}

const admin = {
  email: 'lastsong@',
  getEmail: function () {
    return this.email;
  },
  __proto__: database,

}

const user = {
  __proto__: admin,
}

const guest = {
  register: function (name, email, password) {
    newUser = {
      name: name, 
      email: email,
      password: password
    }
    database.users.push(newUser)
  },
  __proto__: user,
}
