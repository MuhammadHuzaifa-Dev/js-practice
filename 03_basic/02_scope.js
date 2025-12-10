    let a = 100
    const b = 200
    var c = 300

{
    let a = 10
    const b = 20
    var c = 30
    // console.log("let inner"+ a);
    // console.log("const inner"+ b);
    // console.log("var inner"+ c);
}

// console.log("let outer"+ a);
// console.log("const outer"+ b);
// console.log("var outer"+ c);


function one() {
    const username = "Huzaifa";
    function two() {
        const website = "www.vosprin.com"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Huzaifa";
    if (username === "Huzaifa") {
        const website = "vosprin.com"
        // console.log(`${username} is founder of ${website}`);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++ Hoisting ++++++++++++++

console.log(addOne(6))
function addOne(num) {
    return num + 1
}

console.log(addTwo(6));
const addTwo = function(num){
    return num + 2
}