// //problem 1

// let Students =["Ahmed", "Qasim", "Umair","Hamza","Uzairistan","Ali"]

// let houses=[]

// for(Studs of Students){
//     if(Studs.length<5){

//         houses.push("Warm house");
//     }
//     if(Studs.length>5){

//         houses.push("cold house");
//     }
// else{

//         houses.push("No house");
//     }

//     console.log(houses);


// }

//Problem 2

// let str="Hello";
// reversedstring=str.split('').reverse().join();
// let str2="World"

// console.log(str2+reversedstring)

// problem 3

// function testpassword(password){
         
//     if(password.length<8){
//         return false;
//     }

//      let hasuppercase=false
//      let haslowercase=false
//      let hasdigit=false
//     for(let i=0;i<=password.length;i++){

//           let char=password[i]

//           if(char >="A" && char<="Z"){
//             hasuppercase=true
//           }
//           if(char >="a" && char<="z"){
//             haslowercase=true
//           }
//           if(char >="0" && char<="9"){
//             hasdigit=true
//           }


//           return hasdigit,haslowercase,hasuppercase;

//     }
// }

// console.log(testpassword("Password123")); // true
// console.log(testpassword("pass123")); 

// problem 4

function sumuntilnegativenumber(arr){

    let sum=0

    for(let num of arr){

        if(num<0)break;

        sum+=num;

    }
    return sum;
}
let arr= [1,2,-4,4,6,7]
console.log(sumuntilnegativenumber(arr));