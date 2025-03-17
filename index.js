// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  /*function moveDodgerRight() {
    const leftNumbers= dodger.style.left.replace("px", "");
    const left= parseInt(lefttNumbers, 360);
    if (left < 360){
        dodger.style.left = `${left + 1}px`;
    
    } 
  }
  document.addEventListener("keyDown", function (e) {
    if(e.key==="arrowleft"){
        moveDodgerRight();
    }

  });*/
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10) || 0;

    if (left < 360) { // it's bound
        dodger.style.left = `${left + 1}px`; // Move right
    }
}
