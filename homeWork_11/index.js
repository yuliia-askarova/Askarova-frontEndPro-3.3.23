//1

function solution(arr) {
    let counter = {};
    let result = [];
  
    for (let num of arr) {
      if (counter[num]) {
        counter[num]++;
      } else {
        counter[num] = 1;
      }
    }
  
    for (let key in counter) {
      if (counter[key] % 2 !== 0) {
        result.push(+key);
      }
    }
  
    console.log(result);
  }
  
  solution([12, 23, 34, 12, 12, 23, 12, 45]);
  solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100]);
  solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]);
  solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]);
  solution([2, 2, 44, 44]);

  //2

const person = {
  name: 'Yuliia',
  age: 10,
  tags: '',
  prevValue: '',

  method: function (){
      return this;
  },
  
  add: function (tag, text) {

      text = (!text) ? '' : text;
      
      if(typeof tag === 'string') {
          this.tags = this.tags.replace(this.prevValue, `${this.prevValue}<${tag}>${text}</${tag}>`);
          this.prevValue = `<${tag}>`;
      }
  },
  render: function () {
      return this.tags;
  }
}
person.add('body');
person.add('div');
person.add('li', 'hello')
console.log (person.render());
const helloList = person.render();
document.write(helloList)