const scrollUpBtn = document.getElementById("scrollUpBtn");
function scrollUp() {
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          scrollUpBtn.style.display = "block";
        } else {
          scrollUpBtn.style.display = "none";
        }
      };
      
      scrollUpBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
}

scrollUp();