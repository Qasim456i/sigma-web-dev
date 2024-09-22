console.log("hello i am conditional tutorial")
let age=15;
let grace =5;

console.log(age ** grace)//it will print its exponential//
console.log(age % grace)

if((age+grace)<18){

    console.log("You are young")
}
 else if(age+grace>16){
    console.log("you are kidding")
 }
else{
    console.log("You are old");
}

// === operator   3==="3" will not be equal  and "3"===3 is equal
// === actually it compare both value and type not only value
// !== it will also check both value and type

               //Ternary operator in JS//
               let a=5;
               let b=10;
               let c=a>b?(a-b):(a*b);
               console.log(c);
