var acc = document.getElementsByClassName("pris"); 
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("aktiv");

    var svar = this.nextElementSibling;
    if (svar.style.display === "block") {
         svar.style.display = "none";
        } else {
            svar.style.display = "block";
    }
  });
}



