let bills = [125, 555, 44]; //array to store the bill data
let tips = new Array(); //array to store tips
let totals = new Array(); //array to store total amount

let calculate=(bills)=> {
  //function to calculate bills
  for (let i = 0; i < bills.length; i++) {
    tips[i] =
      bills[i] <= 300 && bills[i] >= 50
        ? (bills[i] * 15) / 100
        : (bills[i] * 20) / 100;
    totals[i] = tips[i] + bills[i];
  }
}

calculate(bills);
document.write("<br/>bills: " + bills); //print the bills array
document.write("<br/>tips: " + tips); //print the tips array
document.write("<br/>totals: " + totals); //print the totals array
