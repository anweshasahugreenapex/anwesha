//task4

// Write a function which accepts the "colorschemes array", "colorscheme name", "step no" and "element name" as parameters and returns the "colorcode of specified element".
// For example -> myFun(colorschemes, 'Green', 1, 'text-2') -> result : #abcxyz

const task4 = (colorschemes_array, colorscheme_name, step_no, element_name) => {
    fetch("template.json")//fetch json data
      .then((response) => response.json())
      .then((data) => {
        colorschemes_array = data.colorschemes;
  
        // colorschemes_array.map((item) => {
        // if (item.name == colorscheme_name) {
        //  console.log(colorschemes_array.findIndex((index)=>index.name == colorscheme_name))
  
        let stepno = colorschemes_array.findIndex(
          (index) => index.name == colorscheme_name
        );//find the index of step number
        if (step_no - 1 == stepno) {
          for (i in colorschemes_array[stepno][`json`][`s${step_no}`][
            element_name
          ]) {
            console.log(
              colorschemes_array[stepno][`json`][`s${step_no}`][element_name][i]
            );
          }
        }
        else{
          alert("not found")
        }
      });
  };
  let colorschemes=[];
  task4(colorschemes, "Green", 1, "text-2");