//1

function findPrefix (arr) { 
    let prefix = "";
    for(let i = 0; i < arr[0].length; i++) {
        let char = arr[0][i];
        for (let j = 1; j < arr.length; j++) {
            if(arr[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
return prefix;
}

console.log(findPrefix(["programming", "product", "procrastination"]));

//2

    function transfornArr (arr,needElInArr) {
        const flattenedArr = arr.flat();

        const result = [];
        let temp = [];

        for(const el of flattenedArr) {
            temp.push(el);
            if(temp.length === needElInArr) {
                result.push(temp);
                temp = [];
            }
        }
        temp.length && result.push(temp);

        console.log(result);
    };

console.log(transfornArr([[1,2], [3,4], [5,6]], 3));
console.log(transfornArr([[1,2,3], [4,5,6]], 2));
console.log(transfornArr([[1,2,3], [4,5,6]], 5));





