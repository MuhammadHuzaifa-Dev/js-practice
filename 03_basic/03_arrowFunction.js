const user = {
    username:'Huzaifa',
    isloggedIn:true,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome To Voprin`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Muhammad"
// user.welcomeMessage()

// console.log(this);

// function vosprin(){
//     const founder = "Huzaifa"
//     console.log(this.founder);
// }
// vosprin()

// const vosprin = function (){
//     const founder = "Huzaifa"
//     console.log(this.founder);
// }
// vosprin()

const vosprin = () => {
    const founder = "Huzaifa"
    console.log(this);
}
// vosprin()


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }


// const addTwo = (num1,num2) =>  num1 + num2

// const addTwo = (num1,num2) =>  (num1 + num2)

const addTwo = (num1,num2) =>  ({username:"huzaifa"})
console.log(addTwo(2,8));
