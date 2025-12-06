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
console.log(userLoggedIn())