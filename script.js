// Facebook Signup Validation
// Reading field values with conditions

let signupButton = document.querySelector(".btn-sign");

signupButton.addEventListener("click", function () {
  // Reading field values
  let firstName = document.getElementById("first-name").value;
  let surName = document.getElementById("surname").value;
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let mobileEmail = document.getElementById("input-mobile").value;
  let password = document.getElementById("input-password").value;

  // Reading gender
  let gender = "";
  if (document.getElementById("female").checked) gender = "Female";
  if (document.getElementById("male").checked) gender = "Male";
  if (document.getElementById("custom").checked) gender = "Custom";

  // Conditions checking
  if (firstName === "") {
    alert("First name is required");
  } else if (surName === "") {
    alert("Surname is required");
  } else if (day === "" || month === "" || year === "") {
    alert("Please select complete date of birth");
  } else if (gender === "") {
    alert("Please select your gender");
  } else if (mobileEmail === "") {
    alert("Mobile number or email is required");
  } else if (password === "") {
    alert("Password is required");
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters");
  } else {
    alert(
      "✅ Welcome " +
        firstName +
        " " +
        surName +
        "! Account created successfully!",
    );
    console.log("Signup Data:", {
      name: firstName + " " + surName,
      dob: day + " " + month + " " + year,
      gender: gender,
      contact: mobileEmail,
    });
  }
});