function sayMyName() {
    console.log("H");
    console.log("u");
    console.log("z");
    console.log("a");
    console.log("i");
    console.log("f");
    console.log("a");
}
// sayMyName()

function addTwoNumbers(n1,n2) {
    // let result = n1+n2 
    // return result;
    
    return n1+n2
}

const result = addTwoNumbers(4,6)
// console.log(`Result: ${result}`);

function userLoggedIn(username = "User") {
    if (!username) {
      return `Please Enter Your Username`
    }
   return `Welcome, ${username}`
}
// console.log(userLoggedIn())

function calculateCartPrice(val1,val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(300,500,1300));

const user = {
    username:'huzaifa',
    price:3000
}

function handleObject(anyObject) {
    console.log(`course user is ${anyObject.username} and he paid ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username:"Muhammad",
//     price:2500
// })

const newArray = [200,300,400]
function getSecondArray(getArray) {
    return getArray[1]
}
console.log(getSecondArray(newArray));
console.log(getSecondArray([200,300,400]));
