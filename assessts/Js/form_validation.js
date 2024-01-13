function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var message = document.forms["myForm"]["message"].value;

    if (name === "" || email === "" || phone === "" || message === "") {
      alert("All fields must be filled out");
      return false;
    }


    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return false;
    }

    // var phoneRegex = /^\d{10}$/;
    // if (!phoneRegex.test(phone)) {
    //   alert("Invalid phone number");
    //   return false;
    // }

    // alert("Form submitted successfully!");
    // return true;
  }
