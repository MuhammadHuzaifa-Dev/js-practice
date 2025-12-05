//singleton
// Object.create

//Object literals

const myId = Symbol(7094)

const githubUser = {
    "full name":"Muhammad Huzaifa",
    [myId]:1377519,
    age:21,
    location:"Karachi",
    email:"muhammadhuzaifa200005@gmail.com",
    isloggedIn:true,
    lastLoginDays:["Monday","Friday"]
};

// console.log(githubUser["full name"]);
// console.log(githubUser["email"]);
// console.log(githubUser[myId]);
// console.log(githubUser.age);

githubUser.email = "h2wentyahmed1999@gmail.com"
// Object.freeze(githubUser)
// githubUser.email = "huzaifa@vosprin.com"
// console.log(githubUser);

githubUser.greetings = function(){
    console.log("Hello Github User");
}

githubUser.greetingsTwo = function(){
    console.log(`Hello Github User, ${this["full name"]}`)
}

console.log(githubUser.greetings());
console.log(githubUser.greetingsTwo());
