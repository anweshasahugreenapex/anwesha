let a = prompt("enter the 1st number(0-9)");
let b = prompt("enter the 2nd number(12-25)");
let res;//result
res = Number(a) + Number(b); //addition
document.write("Adition  : ", res + "<br>");

res = Number(a) - Number(b); //subtraction
document.write("Subtraction  : ", res + "<br>");

res = Number(a) * Number(b); //multiplication
document.write("Multiplication  :", res + "<br>");

ret = (Number(a) / Number(b)).toFixed(2); // division of two numbers round of 2 digits after "."

document.write("Division  :", res + "<br>");

res = Number(a) % Number(b); //reminder
document.write("Reminder  :", res + "<br>");

res = Number(a) ** 2; //exponentiation
document.write("Exponential  :", res + "<br>");

res = Number(++a); //increment of digit
document.write("Incremented value : ", res + "<br>");

res = Number(--a); //decrement of digit
document.write("Decremented value : ", res + "<br");
