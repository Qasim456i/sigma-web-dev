// console.log("SAAS")//SAAS stand for software as a service  for example canva
// function adjective(){
//     a="Crazy"
//     b="amazing"
//     c="fire"

//     let f=Math.floor(Math.random()*3)
//     if(f==0)
//         return a;
//     if(f==1)
//         return b;
//     if(f==2)
//         return c;


    
// }
// function no(){
//     a="Crazy"
//     b="amazing"
//     c="fire"

//     let f=Math.floor(Math.random()*3)
//     if(f==0)
//         return a;
//     if(f==1)
//         return b;
//     if(f==2)
//         return c;

    
    
// }
// function yes(){
//     a="Crazy"
//     b="amazing"
//     c="fire"

//     let f=Math.floor(Math.random()*3)
//     if(f==0)
//         return a;
//     if(f==1)
//         return b;
//     if(f==2)
//         return c;

    
    
// }
// console.log("business name : " , no(),yes(),adjective());


let r=Math.random();
console.log(r)

let first,second,third;

if(r===0.33){
    first="n";

}
else if(r>=0.33  &&  r<=0.66){
    first="m";

}

else {
    first="o";
}


r=Math.random();
if(r===0.33){
    second="q";

}
else if(r>=0.33  &&  r<=0.66){
    second="w";

}

else {
    second="e";
}




r=Math.random();
if(r===0.33){
   third="z";

}
else if(r>=0.33  &&  r<=0.66){
    third="x";

}

else {
    third="c";
}

console.log(`${first}  ${second}  ${third}`);