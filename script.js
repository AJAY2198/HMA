function validation() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var address = document.getElementById("address").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var emails = document.getElementById("emails").value;

    if (user == "") {
      document.getElementById("username").innerHTML =
        " ** Please fill the username field";
       window.alert("Invalid input");
    }
    if (user.length <= 2 || user.length > 20) {
      document.getElementById("username").innerHTML =
        " ** Username lenght must be between 2 and 20";
      return false;
    }
    if (!isNaN(user)) {
      document.getElementById("username").innerHTML =
        " ** only characters are allowed";
      return false;
    }

    if (pass == "") {
      document.getElementById("passwords").innerHTML =
        " ** Please fill the password field";
        window.alert("Invalid input");
    }
    if (pass.length <= 5 || pass.length > 20) {
      document.getElementById("passwords").innerHTML =
        " ** Passwords lenght must be between  5 and 20";
      return false;
    }

    if (address == "") {
      document.getElementById("address").innerHTML =
        " ** Please fill the Address field";
      return false;
    }

    if (mobileNumber == "") {
      document.getElementById("mobileno").innerHTML =
        " ** Please fill the mobile NUmber field";
        window.alert("Invalid input");
    }
    if (isNaN(mobileNumber)) {
      document.getElementById("mobileno").innerHTML =
        " ** user must write digits only not characters";
      return false;
    }
    if (mobileNumber.length != 10) {
      document.getElementById("mobileno").innerHTML =
        " ** Mobile Number must be 10 digits only";
      return false;
    }

    if (emails == "") {
      document.getElementById("emailids").innerHTML =
        " ** Please fill the email idx` field";
      return false;
    }
    if (emails.indexOf("@") <= 0) {
      document.getElementById("emailids").innerHTML =
        " ** @ Invalid Position";
      return false;
    }

    if (
      emails.charAt(emails.length - 4) != "." &&
      emails.charAt(emails.length - 3) != "."
    ) {
      document.getElementById("emailids").innerHTML =
        " ** . Invalid Position";
      return false;
    }
  }