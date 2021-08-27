// Fetching HTML Elements in Variables by ID.
let form_fetch = document.getElementById("form_sample");
const createform = document.createElement("form"); // Create New Element Form
createform.setAttribute("name", "form");

form_fetch.appendChild(createform);

const heading = document.createElement("h2");
heading.setAttribute("id", "heading"); // Heading of Form
heading.innerHTML = "Login Form ";
createform.appendChild(heading);

const linebreak = document.createElement("br");
createform.appendChild(linebreak);

const namelabel = document.createElement("label"); // Create Label for Name Field
namelabel.innerHTML = "Your Name : "; // Set Field Labels
createform.appendChild(namelabel);

const inputelement = document.createElement("input"); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("id", "name");

createform.appendChild(inputelement);

createform.appendChild(linebreak);

const emaillabel = document.createElement("label"); // Create Label for E-mail Field
emaillabel.innerHTML = "Your Email : ";
createform.appendChild(emaillabel);

const emailelement = document.createElement("input"); // Create Input Field for E-mail
emailelement.setAttribute("type", "text");
emailelement.setAttribute("id", "email");

createform.appendChild(emailelement);

const emailbreak = document.createElement("br");
createform.appendChild(emailbreak);

const passlabel = document.createElement("label"); // Create Label for password Field
passlabel.innerHTML = "Your Password : ";
createform.appendChild(passlabel);

const passelement = document.createElement("input"); // Create Input Field for E-mail
passelement.setAttribute("type", "text");
passelement.setAttribute("id", "password");

createform.appendChild(passelement);

const passbreak = document.createElement("br");
createform.appendChild(passbreak);

const submitelement = document.createElement("input"); // Append Submit Button
submitelement.setAttribute("type", "button");

submitelement.setAttribute("value", "Submit");
submitelement.setAttribute("id", "Submitbtn");
createform.appendChild(submitelement);

let input_table = document.getElementById("form_data");

const table = document.createElement("table"); //create table
table.setAttribute("class", "table"); //set class to the table

const thead = document.createElement("thead"); //create table head

const tr = document.createElement("tr"); ///create table row

const name_head = document.createElement("th"); //table headings
name_head.setAttribute("class", "headings");
name_head.innerText = "Name";
tr.appendChild(name_head);

thead.appendChild(tr);
table.appendChild(thead);

const email_head = document.createElement("th");
email_head.setAttribute("class", "headings");
email_head.innerText = "Email";
tr.appendChild(email_head);

const password_head = document.createElement("th");
password_head.setAttribute("class", "headings");
password_head.innerText = "password";
tr.appendChild(password_head);

Submitbtn.addEventListener("click", function () {
  if (validateEmail() && validatename() && validatepassword()) {
    let password_val = document.getElementById("password").value;
    let name_val = document.getElementById("name").value;
    let email_val = document.getElementById("email").value;

    const table_body = document.createElement("tbody");
    const tr1 = document.createElement("tr"); ///create table row
    const td = document.createElement("td"); ///create table data for name

    td.innerText = `${name_val}`;
    tr1.appendChild(td);

    const td2 = document.createElement("td"); ///create table data for email
    td2.innerText = `${email_val}`;
    tr1.appendChild(td2);

    const td3 = document.createElement("td"); ///create table data form password
    td3.innerText = `${password_val}`;
    tr1.appendChild(td3);
    table.appendChild(tr1);
    input_table.appendChild(table);

    refresh_input();
  } 
});

const refresh_input = () => {
  //to refresh the input field
  document.getElementById("password").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
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

const validatename = () => {
  //function for firstname validation

  const namee = document.getElementById("name").value;
  //  const lnamee=document.getElementById("lname").value;
  if (namee != "" && isNaN(namee)) {
    document.getElementById("name").focus();
    return true;
  }
  alert("Please enter valid name");
  document.getElementById("name").focus();
  return false;
};

const validatepassword = () => {
  //function for password validation

  const pass = document.getElementById("password").value;

  if (pass != "" && pass.length > 3) {
    document.getElementById("password").focus();
    return true;
  }
  alert("Please enter valid password having length > 3");
  document.getElementById("password").focus();
  return false;
};
