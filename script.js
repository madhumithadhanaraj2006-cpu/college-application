function validateForm(){

    let valid = true;

    // Clear old messages
    document.querySelectorAll("span").forEach(function(x){
        x.innerHTML = "";
    });

    document.getElementById("success").innerHTML = "";

    // Get values
    let name = document.getElementById("name").value.trim();
    let regno = document.getElementById("regno").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let dob = document.getElementById("dob").value;
    let department = document.getElementById("department").value;
    let percentage = document.getElementById("percentage").value.trim();
    let address = document.getElementById("address").value.trim();

    let gender = document.querySelector('input[name="gender"]:checked');

    let declaration = document.getElementById("declaration").checked;

    // Patterns
    let namePattern = /^[A-Za-z ]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let mobilePattern = /^[6-9][0-9]{9}$/;
    let regPattern = /^[0-9]{10}$/;

    // Name
    if(name == ""){
        document.getElementById("nameError").innerHTML =
        "Please enter your name";
        valid = false;
    }
    else if(!namePattern.test(name)){
        document.getElementById("nameError").innerHTML =
        "Name should contain only letters";
        valid = false;
    }

    // Register Number
    if(regno == ""){
        document.getElementById("regError").innerHTML =
        "Please enter register number";
        valid = false;
    }
    else if(!regPattern.test(regno)){
        document.getElementById("regError").innerHTML =
        "Register number must contain 10 digits";
        valid = false;
    }

    // Email
    if(email == ""){
        document.getElementById("emailError").innerHTML =
        "Please enter email";
        valid = false;
    }
    else if(!emailPattern.test(email)){
        document.getElementById("emailError").innerHTML =
        "Please enter a valid email";
        valid = false;
    }

    // Mobile
    if(mobile == ""){
        document.getElementById("mobileError").innerHTML =
        "Please enter mobile number";
        valid = false;
    }
    else if(!mobilePattern.test(mobile)){
        document.getElementById("mobileError").innerHTML =
        "Enter a valid 10-digit mobile number";
        valid = false;
    }

    // Date
    if(dob == ""){
        document.getElementById("dobError").innerHTML =
        "Please select date of birth";
        valid = false;
    }

    // Department
    if(department == ""){
        document.getElementById("departmentError").innerHTML =
        "Please select a department";
        valid = false;
    }

    // Percentage
    if(percentage == ""){
        document.getElementById("percentageError").innerHTML =
        "Please enter percentage";
        valid = false;
    }
    else if(isNaN(percentage) || percentage < 35 || percentage > 100){
        document.getElementById("percentageError").innerHTML =
        "Percentage must be between 35 and 100";
        valid = false;
    }

    // Gender
    if(gender == null){
        document.getElementById("genderError").innerHTML =
        "Please select gender";
        valid = false;
    }

    // Address
    if(address == ""){
        document.getElementById("addressError").innerHTML =
        "Please enter your address";
        valid = false;
    }

    // Declaration
    if(!declaration){
        document.getElementById("declarationError").innerHTML =
        "Please accept the declaration";
        valid = false;
    }

    // Success
    if(valid){

        document.getElementById("success").innerHTML =
        "✓ Application submitted successfully!";

        document.getElementById("applicationForm").reset();

    }

    return false;
}