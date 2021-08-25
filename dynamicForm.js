// Fetching HTML Elements in Variables by ID.
let form_fetch = document.getElementById("form_sample");
const createform = document.createElement("form"); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form

createform.setAttribute("method", "post"); // Setting Method Attribute on Form
form_fetch.appendChild(createform);

const heading = document.createElement("h2"); // Heading of Form
heading.innerHTML = "Login Form ";
createform.appendChild(heading);

const line = document.createElement("hr"); // Giving Horizontal Row After Heading
createform.appendChild(line);

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
submitelement.setAttribute("type", "submit");

submitelement.setAttribute("value", "Submit");
submitelement.setAttribute("id", "Submitbtn");
createform.appendChild(submitelement);

// const ev = document.getElementById("Submitbtn");

Submitbtn.addEventListener("click", function () {//on click of submit button   alert submitted successfully.
  alert("submitted successfully");
});
