let data = [];//array to store object inputs
let index = null;
let indd = null;

const resetTable = () => {//to reset the data
  const confirmMessage = confirm(
    "Are you sure want to reset table data? It will delete all data from table. "
  );
  if (confirmMessage) {
    window.location.reload();
    alert("cleared Successfully");
  } else {
    alert("cancelled!");
  }
};

const addData = () => {//function to run on click of add button
  if (index !== null) {//for update button
    data[indd].id = index;// storing the values to the update object
    data[indd].fname= document.getElementById("fname").value;
    data[indd].lname = document.getElementById("lname").value;
    data[indd].age = document.getElementById("yr").value;
    data[indd].email = document.getElementById("email").value;
   
   data.unshift(data.splice(indd,1)[0])//putting the updated value at first and removing the older
 
    print(data);
  } else {
    //input from user for new data
    const getfName = document.getElementById("fname").value;
    const getlName = document.getElementById("lname").value;
    const getage = document.getElementById("yr").value;
    const getEmail = document.getElementById("email").value;

    if (getfName != "" && getlName != "" && getage != "" && getEmail != "") {
      const obj = {
        id: new Date().getUTCMilliseconds(),
        fname: getfName,
        lname: getlName,
        age: getage,
        email: getEmail,
      };
      data.push(obj);
      print(data);
      // $("#id").val("");
      // $("#fname").val("");
      // $("#lname").val("");
      // $("#age").val("");
      // $("#email").val("");
    } else {
      alert("All feilds are Mandatory..");
    }
  }
};


function print(arr) {//print the updated array
  document.getElementById("showResult").innerHTML = " ";
  let result = " ";
  arr.map((object) => {
    result += `<tr id='row'>
           <td>${object.id}</td>
            <td>${object.fname}</td>
            <td>${object.lname}</td>
            <td>${object.age}</td>
            <td>${object.email}</td>
           
            <td><input type='button' onclick='deleteRow(${object.id});' class='btn btn-danger' value='Delete'/></td>
            <td><input id="update" type='button' onclick='updateRow(${object.id});' class='btn btn-danger' value='Update'/></td>
           
            </tr>`;
    document.getElementById("showResult").innerHTML = result;
  });
}


const deleteRow = (delete_item) => {//function to run on delete button
  var cnfrmMessage = confirm("Are you sure want to Delete selected data? ");
  if (cnfrmMessage == true) {
    let indexx = delete_item;//fetching the id value
    let ind = data.findIndex((i) => i.id === indexx);//get the index of object
   data.splice(ind, 1);
    print(data);
  } else {
    alert("Cancelled..!!");
  }
};

const updateRow = (delete_item) => {//function to run on update button
  index = delete_item;//fetching the id value
  indd = data.findIndex((i) => i.id === index);//get the index of object
  document.getElementById("fname").value = data[indd].fname;
  document.getElementById("lname").value = data[indd].lname;
  document.getElementById("yr").value = data[indd].age;
  document.getElementById("email").value = data[indd].email;
 
};
