setTimeout(function() {    
    const title = document.getElementsByClassName("accordeon-question-title");  
    if (!title) return null;    
    for (var i = 0; i < title.length; i++) {
        title[i].addEventListener("click", function() {
            if (!(this.classList.contains("active"))) {
                for(var i = 0; i < title.length; i++) {
                    title[i].classList.remove("active");
                }
                this.classList.add("active");
            }
        });
    }
}, 100); 



