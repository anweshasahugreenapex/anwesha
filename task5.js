//task5

//  Write a function which accepts "steps array" and "element name" and checks if "element name" exists or not in "steps array". If it exists in "steps array" then returns "step no" as result.
// For example -> myFun(steps, 'text-1') -> result : 0 / 1 / 2 / 3

let index = 0;
const task5 = (steps_array, element_name) => {
  fetch("template.json")//fetch json data
    .then((response) => response.json())
    .then((data) => {
      steps_array = data.steps;
      // console.log(steps_array)
      // console.log(steps_array.map((item)=>item.elements))
      steps_array.map((item) => {
        index = item.elements.findIndex((ind_val) => ind_val == element_name);//find index of element
        if (index >= 0) {
          console.log(index);
        }
      });
    });
};
let steps = [];

task5(steps, "text-1");
