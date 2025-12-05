// const fbUser = new Object();
const fbUser = {};
fbUser.id = "fb0023"
fbUser.name = "Huzaifa"
fbUser.isLoggedIn = false

// console.log(fbUser);

const someUser = {
 fullname: {
        userFullname:{
            firstname:"Muhammad",
            lastname:"Huzaifa"
        }
    }
}

// console.log(someUser.fullname.userFullname.firstname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};

// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const user = [
    {id:1,email:"huzaifa1@vosprin.com"},
    {id:2,email:"huzaifa2@vosprin.com"},
    {id:3,email:"huzaifa3@vosprin.com"},
]

// console.log(user[1].email);

// console.log(fbUser);
// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser));
// console.log(Object.entries(fbUser));

// console.log(fbUser.hasOwnProperty("isLoggedIn"));
