const bills = [125, 555, 44]; //array to store the bill data
let tips = []; //array to store tips
let totals = []; //array to store total amount

const calculate = (bill) => {
  //function to calculate tip
  let tip = bill <= 300 && bill >= 50 ? (bill * 15) / 100 : (bill * 20) / 100;
  return Number(tip);
};

bills.map((item, index) => {
  //map function to store  tips and total
  tips[index] = calculate(item);
  totals[index] = tips[index] + item;
});

document.write(`<br/>bills: ${bills}`); //print the bills array
document.write(`<br/>tips:  ${tips}`); //print the tips array
document.write(`<br/>totals:  ${totals}`); //print the totals array
