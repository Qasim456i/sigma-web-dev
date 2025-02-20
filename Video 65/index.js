 //FActorial of a number 1st with reduce method
  
//   let n=prompt("Enter a number :");
//   n=Number(n);
//   let arr=[];
//   for(var i=1;i<=n;i++){
//     arr.push(i);
//   }

// const red=(a,b)=>{
//     return a*b;
// }
// console.log(arr);
// console.log(arr.reduce(red));



let a=6;
function factorial(number){
   let arr=Array.from(Array(number+1).keys())
   console.log(arr.slice(1,));
   let c=arr.slice(1,).reduce((a,b)=>{
      return a*b;

   })
   console.log(c);
}
factorial(a);

 








// //2nd with for loop method

// let m=prompt("Enter a number :");
// m=Number(m);

// let fact=1;

// for(let i=1;i<=m;i++){

//     fact *=i;
// }
// console.log(fact);
