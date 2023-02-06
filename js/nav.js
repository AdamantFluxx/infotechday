var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbarMenu").style.top = "55px";


  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("navbarMenu").style.top = "0";


  }
  prevScrollpos = currentScrollPos;
} 