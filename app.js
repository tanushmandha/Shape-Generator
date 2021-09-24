let button = document.getElementById("button")
var numberInshape = 1;
var oldValue = 0;

button.onclick =()=> {
    let n = document.getElementById("number").value;
    const circle = document.getElementById("circle")
    const square = document.getElementById("square")
    const rectangel = document.getElementById("rectangel")
    const $box = document.getElementById("box")
    n = Number(oldValue) + Number (n);

    for(let j = numberInshape; j<=n; j++){
        var shape = document .createElement("div");
        shape.innerHTML += numberInshape;

        if(circle.checked){
            shape.classList.add("circle")
        } 
        else if (square.checked) {
            shape.classList.add("square")
      }  
       else if (rectangle.checked) {
            shape.classList.add("rectangle")
      }

      
      
      $box.appendChild(shape);
      numberInshape++;
      oldValue = document.getElementById("box").lastElementChild.innerHTML;
    }
}