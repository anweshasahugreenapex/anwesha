//task2
// Write a function which accepts "step no" and "element name" as parameters. Then checks if "element name" exists or not in "step json" and returns boolean as result (true / false).
// For example -> myFun(2, 'text-4') -> result : true / false

const task2 = (stepNum, elementName) => {
    fetch("template.json")//fetch json data
      .then((response) => response.json())
      .then((data) => {
        let indexx = data.steps.findIndex((item) => item.stepnum === stepNum);
  
        let element_array = data.steps[indexx].elements;
        if (element_array.includes(elementName)) {//if element present in the list print true in console
          console.log(true);
        } else {
          console.log(false);//if not present print false
        }
      });
  };
  
  task2(2, "text-4");
  