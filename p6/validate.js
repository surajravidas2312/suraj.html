function validateForm() {
    var name = document.myForm.mobnu.value;
    var mobileRegex = "[6-9]{1}+[0-9]{9}"; 
    if (name == "" || name == null) {
        alert("Enter Mobile Number");
        var firstNameField = document.getElementById("mobnu");
        firstNameField.focus();
        return false;
    } else if (!mobileRegex.test(name)) {  
        alert("Enter valid Mobile Number");
        var firstNameField = document.getElementById("mobnu");
        firstNameField.focus();
        return false;
    }
    var email = document.myForm.Email.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (email === "" || email === null) {
        alert("Enter Email !!")
        var firstNameField = document.getElementById("email");
        firstNameField.focus();
        return false;
    } else if (!emailRegex.test(email)) {
        alert("Enter Valid Email !!")
        var firstNameField = document.getElementById("email");
        firstNameField.focus();
        return false;
    }
    alert("Registration successful!");
    return true;.     
    }
