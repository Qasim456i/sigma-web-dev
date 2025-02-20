// console.log("harry")
// let qasimjogi=document.getElementsByClassName("box")
// console.log(qasimjogi);
// qasimjogi[2].style.backgroundColor ="red";
// document.getEleme
// document.querySelector(".box").style.backgroundColor="Green"//it wil target the first one
document.querySelectorAll(".box").forEach(e=>{
    //   console.log(e);//it will print all
    e.style.backgroundColor="red"
})

document.getElementsByTagName("div")//it will print all the div
e=document.getElementsByTagName("div")
e[4].matches("#redbox")//and it will shw the closest match
e[3].closest(".container")//it wil show the closest container 
document.querySelector(".container").contains(e[0]);//it will give true because it contain itself