    let a = 100
    const b = 200
    var c = 300

{
    let a = 10
    const b = 20
    var c = 30
    console.log("let inner"+ a);
    console.log("const inner"+ b);
    console.log("var inner"+ c);
}

console.log("let outer"+ a);
console.log("const outer"+ b);
console.log("var outer"+ c);
