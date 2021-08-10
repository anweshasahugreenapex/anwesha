let a = prompt("enter the 1st number(0-9)");
//input 1st number using prompt

let b = prompt("enter the 2nd number(12-25)");//input 2nd number using prompt


    const  addition= Number(a) + Number(b); //addition
    document.write("Adition  : ", addition + "<br>");
    
    const subtraction = Number(a) - Number(b); //subtraction
    document.write("Subtraction  : ", subtraction + "<br>");
    
    const multiplication = Number(a) * Number(b); //multiplication
    document.write("Multiplication  :", multiplication + "<br>");
    
    const division = (Number(a) / Number(b)).toFixed(2); // division of two numbers round of 2 digits after "."
    
    document.write("Division  :", division + "<br>");
    
    const reminder = Number(a) % Number(b); //reminder
    document.write("Reminder  :", reminder + "<br>");
    
    const exponentiation = Number(a) ** 5; //exponentiation
    document.write("Exponential power 5 of a :", exponentiation + "<br>");
    
    const increment = Number(++a); //increment of a
    document.write("Incremented value : ", increment + "<br>");
    
    const decrement = Number(--a); //decrement of a
    document.write("Decremented value : ", decrement + "<br");
    

