const day = Number(prompt("enter the number")); //take user input to show the corresponding day.

switch (day) {//switch case
  case 1: //if day = 1
    document.getElementById("Result").innerText = "MONDAY";
    break;
  case 2: //if day = 2
    document.getElementById("Result").innerText = "TUESDAY";
    break;
  case 3: //if day = 3
    document.getElementById("Result").innerText = "WEDNESDAY";
    break;
  case 4: //if day = 4
    document.getElementById("Result").innerText = "THURSDAY";
    break;
  case 5: //if day = 5
    document.getElementById("Result").innerText = "FRIDAY";
    break;
  case 6: //if day = 6
    document.getElementById("Result").innerText = "SATURDAY";
    break;
  case 7: //if day = 7
    document.getElementById("Result").innerText = "SUNDAY";
    break;
  
  default:
    document.getElementById("Result").innerText =
      "INVALID INPUT. PLEASE ENTER A VALID INPUT";
      break;
}
