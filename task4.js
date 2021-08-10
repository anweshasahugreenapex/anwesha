let chickens; //enter the number of chickens
let cows; //enter the number of cows
let dogs; //enter the number of dogs
let countleg = (chickens, cows, dogs) => {
  document.write("chickens = " + chickens * 2 + " legs");
  document.write("<br/>cows = " + cows * 4 + " legs");
  document.write("<br/>dogs = " + dogs * 4 + " legs");
}; //arrow function that calculates the legs which takes 3 parameters ie, chickens,cows and dogs.
const count = chickens + cows + dogs;
if (count < 10) {
  //if the total number of animals are less than 10 then if part will execute .
  countleg(1, 3, 5);
} //if the total number of animals are greater than or equal to 10 ,then else part will execute.
else {
  countleg(1, 3, 5);
}
