let bts=document.getElementById("btn");

bts.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML="Yey you <b> were changed";
});
// bts.addEventListener("contextmenu", ()=>{
    // alert("Dont hack us by right click please");
// });
document.addEventListener("keydown", (e)=>{
    console.log(e,e.keyCode);
});






