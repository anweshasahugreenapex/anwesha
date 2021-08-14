let list = []; //array to store the user entered tasks
let inp = document.getElementById("inp"); //fetch the input enters in text input box
let todolist = document.getElementById("todolist");

document.getElementById("btn").addEventListener("click", ()=> {
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



let showlist=()=> {
  //function to display the task with delete and update button
  todolist.innerHTML = "";
  list.map(function (n, i) {//map
    if(n!=""){
      todolist.innerHTML +=
      "<li>" +
      n +
      "<button id='btn1' onclick='edititem("+i+")'>UPDATE</button>" +
      "<button id='btn2' onclick='deleteitem(" +
      i +
      ")'>DELETE</button> </li>";
    }
    
    
  });
}

let deleteitem=(i)=> {
  //function to delete task

  list.splice(i, 1); //delete the task
  showlist();
}

let edititem=(i)=>
 {

const indexx=i;
inp.value=(list[indexx])

list[indexx]=document.getElementById("btn").value
// list[0]=list[indexx]

showlist()

 
 }

 








 


















  

