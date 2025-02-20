// document.body.childNodes[1].style.backgroundColor="red"

// document.body.firstElementChild.firstElementChild.style.backgroundColor="red";
// document.body.firstElementChild.ElementChild.style.backgroundColor="red";



// let boxes=document.body.getElementsByClassName("box")
let boxes=document.querySelector(".container").children;


function getrandomColor(){

  let  var1=Math.random()*233;
   let var2=Math.random()*224;
   let var3=Math.random()*111;

    return `rgb(${var1}, ${var2}, ${var3})`

}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor=getrandomColor();
});