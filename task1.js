//task1


// value will be either "red" / "black" / "green" etc
// ```1. Write a function which accepts "step no" and "element name" as parameters and returns "element json" as result.
// For example -> myFun(2, 'text-4')


const task1 = (stepNum, elementName) => {
    fetch("template.json")//fetch json data
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        // console.log(data.steps)
        let indexx = data.steps.findIndex((item) => item.stepnum === stepNum);
        // console.log(indexx)
        // console.log(data.steps[indexx].elements)
        let element_array = data.steps[indexx].elements;
        if (element_array.includes(elementName)) {//print element object if present in the data
          document.write(element_array);
        }
        else{
          alert("not found")//else alert not found
        }
      });
  };
  task1(2, "text-4");
  