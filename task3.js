let x; //take a variable x.
let size = 15; //take the size to run the loop.
for (
  x = 0;
  x <= size;
  x++ //the loop will go from 0 to 15
) {
  if (x % 2 === 0) {
    //checks if the number is even if yes,then if statement will execute.
    document.write(x + " is an even number<br/>");
  } //if the number is odd then,else statement will execute.
  else {
    document.write(x + " is  an odd number<br/>");
  }
}
