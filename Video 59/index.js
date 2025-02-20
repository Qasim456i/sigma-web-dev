// let random=Math.random()
// console.log(random);
// let a= prompt("Enter first number")
// let b=prompt("Enter operation")
// let c=prompt("Enter second number")

// let obj = {

//     "+":"-",
//     "*":"+",
//     "-":"/",
//     "/":"**",
// }

// if (random>0.1){
   
//     console.log(`The result is ${eval(`${a} ${b} ${c}`)}`);
// }
// else{
//     b=obj[b]
//     console.log(`The result is ${eval(`${a} ${b} ${c}`)}`);
    
// }




let random = Math.random();
console.log(random);

let a = prompt("Enter first number");
let b = prompt("Enter operation");
let c = prompt("Enter second number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
};

if (random > 0.1) {
    if (b === "+") {
        console.log(`The result is ${Number(a) + Number(c)}`);
    } else if (b === "-") {
        console.log(`The result is ${Number(a) - Number(c)}`);
    } else if (b === "*") {
        console.log(`The result is ${Number(a) * Number(c)}`);
    } else if (b === "/") {
        console.log(`The result is ${Number(a) / Number(c)}`);
    }
} else {
    b = obj[b];
    if (b === "-") {
        console.log(`The result is ${Number(a) - Number(c)}`);
    } else if (b === "+") {
        console.log(`The result is ${Number(a) + Number(c)}`);
    } else if (b === "/") {
        console.log(`The result is ${Number(a) / Number(c)}`);
    } else if (b === "**") {
        console.log(`The result is ${Number(a) ** Number(c)}`);
    }
}
