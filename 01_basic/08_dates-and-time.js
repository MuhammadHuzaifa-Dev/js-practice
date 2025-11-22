// Dates

const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// const myCreatedDate = new Date(2026,2,31);
// console.log(myCreatedDate.toDateString());

// const myCreatedDate = new Date(2026,2,20,7,8);
// console.log(myCreatedDate.toLocaleString());

const myCreatedDate = new Date("03-20-2026");
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.getTime());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(Math.floor(myTimestamp/1000));

const newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getTime());

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
}));
