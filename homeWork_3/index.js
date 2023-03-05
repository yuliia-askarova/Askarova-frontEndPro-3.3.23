let name = prompt ('What is your name?');
let surname = prompt ('What is your surname?');
let age = prompt ('How old are you?');
let city = prompt ('Where do you live?');

let permission = confirm ('Are you giving the permission to process your data?');

let user = {
    name: name,
    surname: surname,
    age: +age,
    city: city
};

permission ? console.log(user) : alert('Пользователь запретил показывать данные');

