let a =prompt("Enter first number ");
let b=prompt("Enter  second number");

let sum=parseInt(a)+parseInt(b);
if(isNaN(a)|| isNaN(b)){
    throw SyntaxError("Please enter a number");
    
}
try{
console.log("The sum of two numbers is "+sum*x)
}catch(error){
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)
}


//in finally block the code will always run either it would be after return type in a function.
