setTimeout(function() {
    var modal_reg_1 = document.getElementById("step1");
    var modal_reg_2 = document.getElementById("step2");
    var modal_reg_3 = document.getElementById("step3");
    var modal_reg_4 = document.getElementById("step4");
    var modal_reg_5 = document.getElementById("step5");
    
    // Get the button that opens the modal
    var btn_reg_open1 = document.getElementsByClassName("salon_btn")[0];
    var btn_reg_open2 = document.getElementsByClassName("salon_btn")[1];
    var btn_reg_open3 = document.getElementsByClassName("salon_btn")[2];
    var btn_reg_open4 = document.getElementsByClassName("salon_btn")[3];
    var btn_reg_open5 = document.getElementsByClassName("salon_btn")[4];
    var btn_reg_open6 = document.getElementsByClassName("salon_btn")[5];
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
    if (btn_reg_open1) {
        btn_reg_open1.onclick = function() {
            modal_reg_1.style.display = "block";
            modal_reg_2.style.display = "none";
        };
        btn_reg_open2.onclick = function() {
            modal_reg_1.style.display = "block";
            modal_reg_2.style.display = "none";
        };
        btn_reg_open3.onclick = function() {
            modal_reg_1.style.display = "block";
            modal_reg_2.style.display = "none";
        };
        btn_reg_open4.onclick = function() {
            modal_reg_1.style.display = "block";
            modal_reg_2.style.display = "none";
        };
        btn_reg_open5.onclick = function() {
            modal_reg_1.style.display = "block";
            modal_reg_2.style.display = "none";
        };
        btn_reg_open6.onclick = function() {
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
            modal_reg_5.style.display = "block";
        };
        btn_reg_5.onclick = function() {
            modal_reg_5.style.display = "none";
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
        span5.onclick = function() {
            modal2.style.display = "none";
        };
    
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
    }
}, 100);
