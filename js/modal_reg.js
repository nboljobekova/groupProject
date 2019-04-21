//Assigning variables

// Get the modal
var modal_reg_1 = document.getElementById("step1");
var modal_reg_2 = document.getElementById("step2");
var modal_reg_3 = document.getElementById("step3");
var modal_reg_4 = document.getElementById("step4");
var modal_reg_5 = document.getElementById("step5");

// Get the button that opens the modal
var btn_reg_open = document.getElementsByClassName("salon_btn")[0];
var btn_reg_1 = document.getElementById("modal-reg-btn1");
var btn_reg_2 = document.getElementById("modal-reg-btn2");
var btn_reg_3 = document.getElementById("modal-reg-btn3");
var btn_reg_4 = document.getElementById("modal-reg-btn4");
var btn_reg_5 = document.getElementById("modal-reg-btn5");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close_reg")[0];
var span2 = document.getElementsByClassName("close_reg")[1];
var span3 = document.getElementsByClassName("close_reg")[2];
var span4 = document.getElementsByClassName("close_reg")[3];
var span5 = document.getElementsByClassName("close_reg")[4];

// When the user clicks the button, open the modal
btn_reg_open.onclick = function() {
    modal_reg_1.style.display = "block";
    modal_reg_2.style.display = "none";
};
btn_reg_1.onclick = function() {
    modal_reg_1.style.display = "none";
    modal_reg_2.style.display = "block";
};
btn_reg_2.onclick = function() {
    modal_reg_2.style.display = "none";
    modal_reg_3.style.display = "block";
};
btn_reg_3.onclick = function() {
    modal_reg_3.style.display = "none";
    modal_reg_4.style.display = "block";
};
btn_reg_4.onclick = function() {
    modal_reg_4.style.display = "none";
    modal5.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal_reg_1.style.display = "none";
};
span2.onclick = function() {
    modal_reg_2.style.display = "none";
};
span3.onclick = function() {
    modal_reg_4.style.display = "none";
};
span4.onclick = function() {
    modal_reg_4.style.display = "none";
};
// span5.onclick = function() {
// 	modal2.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_reg_1) {
        modal_reg_1.style.display = "none";
        modal_reg_2.style.display = "none";
    }
    if (event.target == modal_reg_2) {
        modal_reg_2.style.display = "none";
        modal_reg_3.style.display = "none";
    }
    if (event.target == modal_reg_3) {
        modal_reg_3.style.display = "none";
        modal_reg_4.style.display = "none";
    }
    if (event.target == modal_reg_4) {
        modal_reg_.style.display = "none";
        modal_reg_5.style.display = "none";
    }
    if (event.target == modal_reg_5) {
        modal_reg_5.style.display = "none";
    }
};
export default modal_reg;


// //Old js
// var modal_reg = document.getElementById("myModal_reg");
// var step_one = document.getElementById("step1");
// var step_two = document.getElementById("step2");
// var step_three = document.getElementById("step3");
// var step_four = document.getElementById("step4");
// // var step_one = document.getElementById("step_one");

// //Form
// var modal_form_reg = document.getElementsByClassName("modal_form_reg")[0];
// var data = {};

// // Buttons that open modals
// var btn_service_reg = document.getElementsByClassName("salon_btn")[0];
// var btn_reg_next = document.ElementsByClassName("modal-reg-btn");

// // X elements that close modals
// var close_reg = document.getElementsByClassName("close_reg")[0];

// //Signin modal

// // When the user clicks the button, open the modal
// btn_service_reg.onclick = function() {
//   modal_reg.style.display = "block";
// };
// // Checking completeness of all inputs and console.log data
// btn_submit_signin.onclick = function() {
//   var signinEmailValue = document.getElementById("signin-email").value;
//   var signinPasswordValue = document.getElementById("signin-password").value;
//   (function() {
//     data["email"] = signinEmailValue;
//     data["password"] = signinPasswordValue;
//     console.log(data);
//   })();
//   // record();
//   this.signinEmailValue = "";
//   this.signinPasswordValue = "";
//   document.location.href = "admin_masters.html";
// };

// // When the user clicks on <span> (x), close the modal
// close_signin.onclick = function() {
//   modal_signin.style.display = "none";
// };
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   debugger;
//   if (event.target == modal_signin) {
//     modal_signin.style.display = "none";
//     console.log("Done");
//   }
// };

// // Signup modal

// // When the user clicks the button, open the modal
// btn_open_signup.onclick = function() {
//   modal_signup.style.display = "block";
// }
// // Checking completeness of all inputs and console.log data
// btn_submit_signup.onclick = function() {
//   var signupUsernameValue = document.getElementById("signup-username").value;
//   var signupAddressValue = document.getElementById("signup-address").value;
//   var signupPhoneValue = document.getElementById("signup-phone").value;
//   var signupDistrictValue = document.getElementById("signup-district").value;
//   var signupEmailValue = document.getElementById("signup-email").value;
//   var signupPasswordValue = document.getElementById("signup-password").value;
//   (function() {
//     data["username"] = signupUsernameValue;
//     data["address"] = signupAddressValue;
//     data["phone"] = signupPhoneValue;
//     data["district"] = signupDistrictValue;
//     data["email"] = signupEmailValue;
//     data["password"] = signupPasswordValue;
//     console.log(data);
//     }());
//     this.signupUsernameValue = "";
//     this.signupAddressValue = "";
//     this.signupPhoneValue = "";
//     this.signupDistrictValue = "";
//     this.signupEmailValue = "";
//     this.signupPasswordValue = "";

//     modal_signup.style.display = "none";
//     document.location.href = "admin_masters.html";

// }
// // When the user clicks on <span> (x), close the modal
// close_signup.onclick = function() {
//   modal_signup.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal_signup) {
//     modal_signup.style.display = "none";
//   }
// }
