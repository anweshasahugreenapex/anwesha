let data = JSON.parse(localStorage.getItem("data")) || [];//to store in local storage
let index = null;
let indd = null;

const resetTable = () => {
  //to reset the data
  const confirmMessage = confirm(
    "Are you sure want to reset table data? It will delete all data from table. "
  );

  if (confirmMessage) {
    document.getElementById("showResult").innerHTML = " ";

    resetinput();

    index = null; //set index to null
    indd = null; //set index id to null
    window.localStorage.clear(data);
    console.log(localStorage.getItem("data"));
  } else {
    alert("cancelled!");
  }
};

const resetinput = () => {//reset the input fields
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("yr").value = "";
  document.getElementById("email").value = "";
};

const addData = () => {
  if (index !== null) {
    //for update button
    data[indd].id = index; // storing the values to the update object
    data[indd].fname = document.getElementById("fname").value;
    data[indd].lname = document.getElementById("lname").value;
    data[indd].yr = document.getElementById("yr").value;
    data[indd].email = document.getElementById("email").value;
    if (
      data[indd].fname != "" &&
      data[indd].lname != "" &&
      data[indd].yr != "" &&
      data[indd].email != ""
    ) {
      if (
        validateEmail() &&
        validatefirstname() &&
        validatelastname() &&
        validateage()
      ) {
        localStorage.setItem("data", JSON.stringify(data));
        dispData();
        resetinput(); //reset the input after updating
        index = null; //putting index value to null after updation
      }
    } else {
      alert("All feilds are Mandatory..");
    }
  } else {
    //input from user for new data

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
        data.push({
          id: new Date().getUTCMilliseconds(),
          fname: getfName,
          lname: getlName,
          yr: getage,
          email: getEmail,
        });
        localStorage.setItem("data", JSON.stringify(data));
        dispData();

        document.getElementById("fname").focus();
      }
    } else {
      alert("All feilds are Mandatory..");
    }
  }
};

const dispData=()=> {
  //console.log(localStorage.getItem("data"));
  if (localStorage.getItem("data")) {
    var output = document.querySelector("tbody");
    document.getElementById("showResult").innerHTML = "";
    JSON.parse(localStorage.getItem("data")).forEach((data) => {
      output.innerHTML += `
                  <tr>
                      <td>${data.id}</td>
                      <td>${data.fname}</td>
                      <td>${data.lname}</td>
                      <td>${data.yr}</td>
                      <td>${data.email}</td>
                      <td><input id="change" type='button' onclick='deleteRow(${data.id});' class='btn btn-danger' value='Delete'/></td>
            <td><input id="change" type='button' onclick='updateRow(${data.id});' class='btn btn-danger' value='Update'/></td>
                  </tr>
          `;
    });
    resetinput();
  }
}

const deleteRow = (delete_item) => {
  //function to run on delete button
  var cnfrmMessage = confirm("Are you sure want to Delete selected data? ");
  if (cnfrmMessage == true) {
    let indexx = delete_item; //fetching the id value
    let ind = data.findIndex((i) => i.id === indexx); //get the index of object

    console.log(ind);
    // data.splice(ind, 1);

    data.splice(ind, 1);
    localStorage.setItem("data", JSON.stringify(data));
    dispData();

    dispData();
  } else {
    alert("Cancelled..!!");
  }
};

const updateRow = (update_item) => {
  //function to run on update button
  index = update_item; //fetching the id value
  indd = data.findIndex((i) => i.id === index); //get the index of object
  document.getElementById("fname").value = data[indd].fname;
  document.getElementById("lname").value = data[indd].lname;
  document.getElementById("yr").value = data[indd].yr;
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

dispData();
