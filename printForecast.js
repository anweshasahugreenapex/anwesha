let data1 = [17, 21, 23]; //dataset 1
let data2 = [12, 5, -5, 0, 4]; //dataset 2
let arr = new Array();

let printForecast = (data1) => {
  //function to print forecast

  arr = data1;
  let day = 1; //day variable set to 1 first for 1st day
  arr.forEach(function (value) {
    console.log(value + "ºC in " + day + " days "); //print on console
    day++;
  });
};

printForecast(data1); //call function printForecast
printForecast(data2);
