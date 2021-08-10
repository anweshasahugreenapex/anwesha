let isanumber = (num) => !isNaN(num);///checking for the number
let Num1 = prompt("Enter the first number :");//input 1st number
while (!isanumber(Num1)) {
  Num1 = prompt("Enter the valid number :");
}
let Num2 = prompt("Enter the second number :");//input 2nd number
while (!isanumber(Num2)) {
  Num2 = prompt("Enter the valid number :");
}
let Num3 = prompt("Enter the third number :");//input 3rd number
while (!isanumber(Num3)) {
  Num3 = prompt("Enter the valid number :");
}

if (Num1 > 0 && Num2 > 0 && Num3 > 0) {   //checking for the sign og the product
  alert("The sign is +");
} else if (Num1 < 0 && Num2 < 0 && Num3 < 0) {
  alert("The sign is -");
} else if (Num1 > 0 && Num2 < 0 && Num3 < 0) {
  alert("The sign is +");
} else if (Num1 < 0 && Num2 > 0 && Num3 < 0) {
  alert("The sign is +");
} else if (Num1 == 0 || Num2 == 0 || Num3 == 0) {
  alert("One of your values is zero ,so the product is 0");//if any value is zero then product is 0 so no sign for that
}  else {
  alert("The sign is -");
}
