// Dashboard aur login ka links
var dashboardLink = "https://codebybasil.github.io/facebook-clone-ui/";
var loginLink = "https://codebybasil.github.io/facebook-login-ui-clone/";

// Sign up button
var signupButton = document.querySelector(".btn-sign");

// Sab fields ki values lena
signupButton.addEventListener("click", function () {
  var firstName = document.getElementById("first-name").value;
  var surname = document.getElementById("surname").value;
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var mobile = document.getElementById("input-mobile").value;
  var password = document.getElementById("input-password").value;

  // Name check
  if (firstName === "" || surname === "") {
    alert("Enter your full name!");
    return;
  }

  // Date of birth check
  if (day === "" || month === "" || year === "") {
    alert("Enter the date of birth in full!");
    return;
  }

  // Gender check
  if (!gender) {
    alert("Select Gander!");
    return;
  }

  // Mobile/Email check
  if (mobile === "") {
    alert("Enter your mobile number or email address!");
    return;
  }

  // Email format check @ hona chahiye
  if (mobile.includes("@") && !mobile.includes(".")) {
    alert("Write the email in the correct format! Example: abc@gmail.com");
    return;
  }

  // Password check
  if (password === "") {
    alert("Fill in the password!");
    return;
  }

  // Password length check at least 6 characters
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.!");
    return;
  }

  // Dashboard par redirect
  alert("Account created successfully! Welcome " + firstName + surname + "!");
  window.location.href = dashboardLink;

  // refresh rokta hai
  signupButton.addEventListener("click", function (e) {
    e.preventDefault();
  });
});
