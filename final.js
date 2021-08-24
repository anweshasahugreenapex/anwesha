let data = []; //array to store object inputs
let index = null;
let indd = null;

const resetTable = () => {
  //to reset the data
  const confirmMessage = confirm(
    "Are you sure want to reset table data? It will delete all data from table. "
  );

  if (confirmMessage) {
    document.getElementById("showResult").innerHTML = " ";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("yr").value = "";
    document.getElementById("email").value = "";
    index = null; //set index to null
    indd = null; //set index id to null
    data.length = 0; // make the data array empty.
    // alert("cleared Successfully");
  } else {
    alert("cancelled!");
  }
};
const resetinput = () => {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("yr").value = "";
  document.getElementById("email").value = "";
};

const addData = () => {
  //function to run on click of add button
  if (index !== null) {
    //for update button
    data[indd].id = index; // storing the values to the update object
    data[indd].fname = document.getElementById("fname").value;
    data[indd].lname = document.getElementById("lname").value;
    data[indd].age = document.getElementById("yr").value;
    data[indd].email = document.getElementById("email").value;
    if (
      data[indd].fname != "" &&
      data[indd].lname != "" &&
      data[indd].age != "" &&
      data[indd].email != ""
    ) {
      if (
        validateEmail() &&
        validatefirstname() &&
        validatelastname() &&
        validateage()
      ) {
        print(data);
        resetinput(); //reset the input after updating
        index = null; //putting index value to null after updation
      }
    } else {
      alert("All feilds are Mandatory..");
    }
  } else {
    //input from user for new data
    const getfName = document.getElementById("fname").value;
    const getlName = document.getElementById("lname").value;
    const getage = document.getElementById("yr").value;
    const getEmail = document.getElementById("email").value;
    if (getfName != "" && getlName != "" && getage != "" && getEmail != "") {
      if (
        validateEmail() &&
        validatefirstname() &&
        validatelastname() &&
        validateage()
      ) {
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
        resetinput();
      }
    } else {
      alert("All feilds are Mandatory..");
    }
  }
};

const print = (arr) => {
  //print the updated array
  document.getElementById("showResult").innerHTML = " ";
  let result = " ";
  arr.map((object) => {
    result += `<tr id='row'>
           <td>${object.id}</td>
            <td>${object.fname}</td>
            <td>${object.lname}</td>
            <td>${object.age}</td>
            <td>${object.email}</td>
           
            <td><input id="change" type='button' onclick='deleteRow(${object.id});' class='btn btn-danger' value='Delete'/></td>
            <td><input id="change" type='button' onclick='updateRow(${object.id});' class='btn btn-danger' value='Update'/></td>
           
            </tr>`;
    document.getElementById("showResult").innerHTML = result;
  });
};

const deleteRow = (delete_item) => {
  //function to run on delete button
  var cnfrmMessage = confirm("Are you sure want to Delete selected data? ");
  if (cnfrmMessage == true) {
    let data1 = Object.assign([], data);
    let indexx = delete_item; //fetching the id value
    let ind = data1.findIndex((i) => i.id === indexx); //get the index of object
    data1.splice(ind, 1);
    data = data1;
    print(data);
  } else {
    alert("Cancelled..!!");
  }
};

const updateRow = (delete_item) => {
  //function to run on update button
  index = delete_item; //fetching the id value
  indd = data.findIndex((i) => i.id === index); //get the index of object
  document.getElementById("fname").value = data[indd].fname;
  document.getElementById("lname").value = data[indd].lname;
  document.getElementById("yr").value = data[indd].age;
  document.getElementById("email").value = data[indd].email;
};

const validateEmail = () => {
  //function for email validation
  let emailID = document.getElementById("email").value;
  let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailID.match(format)) {
    document.getElementById("email").focus();
    return true;
  }

  alert("Please enter correct email ID");
  document.getElementById("email").focus();
  return false;
};

const validatefirstname = () => {
  //function for firstname validation

  const fnamee = document.getElementById("fname").value;
  //  const lnamee=document.getElementById("lname").value;
  if (fnamee != "" && isNaN(fnamee)) {
    document.getElementById("fname").focus();
    return true;
  }
  alert("Please enter valid first name");
  document.getElementById("fname").focus();
  return false;
};

const validatelastname = () => {
  //function for last name validation

  const lnamee = document.getElementById("lname").value;
  if (lnamee != "" && isNaN(lnamee)) {
    document.getElementById("lname").focus();
    return true;
  }
  alert("Please enter valid last name");
  document.getElementById("lname").focus();
  return false;
};

const validateage = () => {
  //function for age validation

  const agee = document.getElementById("yr").value;
  const formatage = /^[0-9]{1,2}$/;
  if (agee.match(formatage)) {
    document.getElementById("yr").focus();
    return true;
  }

  alert("Please enter correct age");
  document.getElementById("yr").focus();
  return false;
};



const fun = () => {
  //function to call on selected dropdown value
  if (data.length == 0) {
    alert(
      "the database is empty.Please enter some values to perform search operation."
    );
  } else {
    let select = document.getElementById("selectbox");
    // console.log(select)
    let selected_val = select.options[select.selectedIndex].value;
    // console.log(selected_val)
    if (selected_val == "asc by age") {
      //sort by age in buttom up approach
      data.sort(function (a, b) {
        return a.age - b.age;
      });
      // console.log(data)
      print(data);
    } else if (selected_val == "desc by age") {
      //sort age in top buttom approach
      data.sort(function (a, b) {
        return b.age - a.age;
      });
      // console.log(data)
      print(data);
    } else if (selected_val == "A-Z") {
      //sort firstname in alphabetical order
      data.sort(function (a, b) {
        if (a.fname > b.fname) {
          return 1;
        } else {
          return -1;
        }
      });
      // console.log(data)
      print(data);
    } else if (selected_val == "Z-A") {
      //sort using reverse alphabetival order
      data.sort(function (a, b) {
        if (b.fname > a.fname) {
          return 1;
        } else {
          return -1;
        }
      });
      // console.log(data)
      print(data);
    } else if (selected_val == "search") {
      //sort age in top buttom approach
      const a = document.getElementById("search_val").value;
      let search_arr = [];//array to store similar searched value
      data.map((objects) => {
        if (objects.fname.includes(a)) {
          search_arr.push(objects);
        } else {
          return -1;
        }
      });
      if (search_arr.length > 0) {
        print(search_arr);
      } else {
        alert("not found");//if not found
      }
    }
  }
};
