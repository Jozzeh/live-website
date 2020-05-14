function instanceHero() {
  let hero = document.getElementById("heroContainer");
  if(typeof hero !== "undefined" && hero !== null){
    //hero exists
    window.onscroll = function() {
      let currentScrollPerc = ((window.scrollY / hero.offsetHeight * 100) / 2);
      if(currentScrollPerc < 10){
        if(currentScrollPerc > 10){
          currentScrollPerc = 0;
        }
        let shiftLeft = currentScrollPerc + "%";
        document.getElementById("heroLeft").style.left = "-" + shiftLeft;
        document.getElementById("heroRight").style.left = shiftLeft;
      }
    }
  }
}

window.onload = function() {
  let hero = document.getElementById("heroContainer");
  if(typeof hero !== "undefined" && hero !== null){
    //hero exists
    window.onscroll = function() {
      let currentScrollPerc = ((window.scrollY / hero.offsetHeight * 100) / 2);
      if(currentScrollPerc < 10){
        if(currentScrollPerc > 10){
          currentScrollPerc = 0;
        }
        let shiftLeft = currentScrollPerc + "%";
        document.getElementById("heroLeft").style.left = "-" + shiftLeft;
        document.getElementById("heroRight").style.left = shiftLeft;
      }
    }
  }
};

