//task3
// Write a function which accepts the "colorschemes array" and "colorscheme name" as parameters and returns the "colorscheme object".
// For example -> myFun(colorschemes, 'Green')
const task3 = (arr, colorscheme_name) => {
    fetch("template.json")//fetch json data
      .then((response) => response.json())
      .then((data) => {
        arr = data.colorschemes;
  
        data.colorschemes.map((item) => {
          if (item.name == colorscheme_name) {
            console.log(item);
          }
        });
      });
  };
  let colorschemes = [];
  task3(colorschemes,'Green');