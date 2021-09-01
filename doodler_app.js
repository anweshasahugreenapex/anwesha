const start_btn = document.getElementById("startbtn");
//on click of play button the game will be shown
start_btn.addEventListener("click", () => {
  document.addEventListener("DOMContentLoaded", showGame());
});

//function to show the background grid,the doodler and the platforms on click of play button
const showGame = () => {
  const container = document.querySelector(".container");
  const grid = document.createElement("div");
  //create the background grid on click of play button
  const createGrid = () => {
    container.appendChild(grid); //append the grid inside thecontainer
    grid.classList.add("grid-container"); //set class to the grid
  };
  createGrid(); //call function to show the grid

  const doodler = document.createElement("div"); //create div for doodler
  //create doodler and append it inside the background grid
  const createDoodler = () => {
    grid.appendChild(doodler);
    doodler.classList.add("doodler");
  };
  createDoodler(); //call the doodler function to show the doodler inside the background grid
};
