const newArr = new Array(1,2,3,4,5);
// console.log(newArr);
// console.log(newArr[2]);

//+++++++++++++++ Array Methods ++++++++++++++++++++

newArr.push(6);
newArr.push(7);
// console.log(newArr);

newArr.pop();
// console.log(newArr);

newArr.unshift(0);
newArr.unshift(9);
// console.log(newArr);

newArr.shift();
// console.log(newArr);

// console.log(newArr.includes(5));

// console.log(newArr.indexOf(5));

const newArr2 = newArr.join();
// console.log(newArr);
// console.log(newArr2);

// Slice, Splice
const myArr = [0,1,2,3,4,5,6]
console.log(`A: ${myArr}`);

console.log(myArr.slice(1,3));
console.log(`B: ${myArr}`);

console.log(myArr.splice(1,3));
console.log(`C: ${myArr}`);