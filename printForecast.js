const data1 = [17, 21, 23]; //dataset 1
const data2 = [12, 5, -5, 0, 4]; //dataset 2
let result = "";

const printForecast = (value) => {
  value.map(
    //map function to print the forecast
    (dataval, day) => (result += `${dataval} ºC in ${day + 1} days<br/>`)
  );
};

printForecast(data1);

document.getElementById("showresult").innerHTML = result; //call function printForecast
printForecast(data2);
document.getElementById("showresult").innerHTML = result; //call  function
