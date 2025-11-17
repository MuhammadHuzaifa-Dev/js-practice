const studentId = 7094;
let studentName = "Muhammad Huzaifa";
/* Prefer not to use var beacause of block scope and functional scope */
var studentPassword = "yerdf";
studentCity = "karachi";
let studentStatus; 
// studentId = 02; //The change of the value of const variable is not allowed
studentName = "laiba";
studentPassword = "sajhdg";
studentCity = "lahore";

console.log(studentId);
console.table([studentId, studentName, studentPassword, studentCity, studentStatus]);