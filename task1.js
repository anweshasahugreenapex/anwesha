let a = prompt("enter the 1st number(0-9)");
//input 1st number

let b = prompt("enter the 2nd number(12-25)");//2nd number

    let  addition= Number(a) + Number(b); //addition
    document.write("Adition  : ", addition + "<br>");
    
    let subtraction = Number(a) - Number(b); //subtraction
    document.write("Subtraction  : ", subtraction + "<br>");
    
    let multiplication = Number(a) * Number(b); //multiplication
    document.write("Multiplication  :", multiplication + "<br>");
    
    let division = (Number(a) / Number(b)).toFixed(2); // division of two numbers round of 2 digits after "."
    
    document.write("Division  :", division + "<br>");
    
    let reminder = Number(a) % Number(b); //reminder
    document.write("Reminder  :", reminder + "<br>");
    
    let exponentiation = Number(a) ** 2; //exponentiation
    document.write("Exponential  :", exponentiation + "<br>");
    
    let increment = Number(++a); //increment of digit
    document.write("Incremented value : ", increment + "<br>");
    
    let decrement = Number(--a); //decrement of digit
    document.write("Decremented value : ", decrement + "<br");
    


