const bills = [125, 555, 44]; //array to store the bill data
let tips = []; //array to store tips
let totals = []; //array to store total amount

bills.map((item, index) => {
  //map function to store  tips and total
  tips[index] = item <= 300 && item >= 50 ? (item * 15) / 100 : (item * 20) / 100 ;
  totals[index] = tips[index] + item;
});

document.write(`<br/>bills: ${bills}`); //print the bills array
document.write(`<br/>tips:  ${tips}`); //print the tips array
document.write(`<br/>totals:  ${totals}`); //print the totals array
