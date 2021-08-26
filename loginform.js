const validation = () => {
  //function to validate the input fields
  let input_text = document.querySelector("#input_text");
  let input_password = document.querySelector("#input_password");
  let error_msg = document.querySelector(".error_msg"); //to show the error

  if (input_text.value.length <= 3 || input_password.value.length <= 3) {
    //if length<3 then the function returns false
    error_msg.style.display = "inline-block";
    input_text.style.border = "1px solid #f74040"; //border becomes red
    input_password.style.border = "1px solid #f74040";
    return false;
  } else {
    alert("logged in successfully"); //on successful submission it shows an alert message
    return true;
  }
};
//for login button
let input_field = document.querySelectorAll(".input");
let login_btn = document.querySelector("#login_btn");

input_field.forEach((input_item) => {
  input_item.addEventListener("input", function () {
    if (input_item.value.length > 3) {
      //button will be enabld only if the user name length and password length >3
      login_btn.disabled = false;
      login_btn.className = "btn enabled";
    }
  });
});
