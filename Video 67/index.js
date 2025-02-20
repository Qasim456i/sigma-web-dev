console.log("hello world")
document.body.childNodes[1];
document.body.firstElementChild;//output will only be the first element
document.body.firstElementChild.childNodes;//will also include txt,coment and elements 
document.body.firstElementChild.children;//will include onlyhtml elements
document.body.firstElementChild.children[3].nextElementSibling;
document.body.firstElementChild.children[3].previousElementSibling;
document.body.children[1].rows//for table
document.body.children[1].columns
