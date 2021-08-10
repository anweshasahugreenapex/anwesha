let chicken = Number(prompt("enter the number of chicken")); //getting the value from user using prompt box
let cow = Number(prompt("enter the number of cow"));
let dog = Number(prompt("enter the number of dog"));
let countleg = (chickens, cows, dogs) => {
  document.write("chickens = " + chickens * 2 + " legs");
  document.write("<br/>cows = " + cows * 4 + " legs");
  document.write("<br/>dogs = " + dogs * 4 + " legs");
}; //arrow function that calculates the legs which takes 3 parameters ie, chickens,cows and dogs.
const count = chicken + cow + dog;
if (count < 10) {
  //if the total number of animals are less than 10 then if part will execute .
  countleg(chicken,cow,dog);
} //if the total number of animals are greater than or equal to 10 ,then else part will execute.
else {
  countleg(chicken,cow,dog);
}
