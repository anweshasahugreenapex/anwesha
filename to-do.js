let list = []; //array to store the user entered tasks
let inp = document.getElementById("inp"); //fetch the input enters in text input box
let todolist = document.getElementById("todolist");

document.getElementById("btn").addEventListener("click", function () {
  //function to run when add button is clicked

  if (document.querySelector("#newtask input").value.length == 0) {
    //if the input fiels is empty and the user clicks on add button then it shows alert
    alert("Please Enter a Task");
  } else {
    //if every thing goes well then the task is added
    list.push(inp.value);
    inp.value = " ";
    showlist(); //function call to display the tasks
  }
  document.querySelector("#newtask input").value = "";
});

function showlist() {
  //function to display the task with delete and update button
  todolist.innerHTML = "";
  list.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<button onclick='edititem(" +
      i +
      ")'>UPDATE</button>" +
      "<button onclick='deleteitem(" +
      i +
      ")'>DELETE</button> </li>";
  });
}

function deleteitem(i) {
  //function to delete task

  list.splice(i, 1); //delete the task
  showlist();
}

function edititem(i) {
  //function to update task using update button only

  let newValue = document.getElementById("inp").value;

  list.splice(i, 1, newValue); //swap the updated value with old value
  showlist();
}
