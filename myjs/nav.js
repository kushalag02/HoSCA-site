function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById("hosca_nav").innerHTML = "HoSCA";
    }
    else {
      document.body.style.backgroundColor = "House of Socio-Cultural Affairs";
    }
  }
  var x = window.matchMedia("(max-width: 500px)")
  myFunction(x)
  x.addListener(myFunction) 