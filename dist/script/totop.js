window.onload = function(){
    var scrolled;
    var timer;
    document.getElementById("to-top").onclick = function (){
        scrolled = window.pageYOffset;
        scrollToTop();
    }
    function scrollToTop (){
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 100;
            timer = setTimeout(scrollToTop, 100);
        }
        else {
             clearTimeout(timer);
             window.scrollTo(0,0);
        }
    }
const btn = document.getElementById("to-top");

function showBtn(){
  btn.style.display = "block";
};
function hideBtn(){
  btn.style.display = "none";
};
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0){
    showBtn();
  }else{
    hideBtn();
  };
});
}
