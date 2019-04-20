//Assigning variables

// Modals
var modal_signin = document.getElementsByClassName("myModal")[0];
var modal_signup = document.getElementsByClassName("myModal")[1];

//Form
var modal_form = document.getElementsByClassName("modal_form")[0];
var data = {};


// Buttons that open modals
var btn_open_signin = document.getElementsByClassName("modal-open-btn")[0];
var btn_open_signup = document.getElementsByClassName("modal-open-btn")[1];
var btn_submit_signin = document.getElementById("modal-signin-btn");
var btn_submit_signup = document.getElementById("modal-signup-btn");


// X elements that close modals
var close_signin = document.getElementsByClassName("close")[0];
var close_signup = document.getElementsByClassName("close")[1];


//Signin modal

// When the user clicks the button, open the modal 
btn_open_signin.onclick = function() {
    modal_signin.style.display = "block";
};
// Checking completeness of all inputs and console.log data
btn_submit_signin.onclick = function() {
    var signinEmailValue = document.getElementById("signin-email").value;
    var signinPasswordValue = document.getElementById("signin-password").value;
    (function() {
        data["email"] = signinEmailValue;
        data["password"] = signinPasswordValue;
        console.log(data);
    }());
    // record();
    this.signinEmailValue = "";
    this.signinPasswordValue = "";
    document.location.href = "admin_masters.html";
};

// When the user clicks on <span> (x), close the modal
close_signin.onclick = function() {
    modal_signin.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    debugger;
    if (event.target == modal_signin) {
        modal_signin.style.display = "none";
        console.log("Done");
    }
};


// Signup modal

// When the user clicks the button, open the modal 
btn_open_signup.onclick = function() {
    modal_signup.style.display = "block";
};
// Checking completeness of all inputs and console.log data
btn_submit_signup.onclick = function() {
    var signupUsernameValue = document.getElementById("signup-username").value;
    var signupAddressValue = document.getElementById("signup-address").value;
    var signupPhoneValue = document.getElementById("signup-phone").value;
    var signupDistrictValue = document.getElementById("signup-district").value;
    var signupEmailValue = document.getElementById("signup-email").value;
    var signupPasswordValue = document.getElementById("signup-password").value;
    (function() {
        data["username"] = signupUsernameValue;
        data["address"] = signupAddressValue;
        data["phone"] = signupPhoneValue;
        data["district"] = signupDistrictValue;
        data["email"] = signupEmailValue;
        data["password"] = signupPasswordValue;
        console.log(data);
    }());
    this.signupUsernameValue = "";
    this.signupAddressValue = "";
    this.signupPhoneValue = "";
    this.signupDistrictValue = "";
    this.signupEmailValue = "";
    this.signupPasswordValue = "";
    

    modal_signup.style.display = "none";
    document.location.href = "admin_masters.html";

};
// When the user clicks on <span> (x), close the modal
close_signup.onclick = function() {
    modal_signup.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_signup) {
        modal_signup.style.display = "none";
    }
};


// Problems:
// Signin modal:
// 1. window.onclick isn"t working
// 2. btn.onclick doesn"t refresh input areas (="") and close modal

// Signup modal:
// 1. btn.onclick doesn"t refresh input areas (="") and close modal


