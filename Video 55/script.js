console.log("Hey  this is tutorial  2 (55th video) of JS")
let a =5;
//a=a+1; we can do this 
let b = 10;
let c="Qashi";
let _a="qasim"
//not valid becauseu cannot start with number
//JS is case sensitive
//var 55a="hamza"
// console.log(a+b+8)
// console.log(typeof a,typeof b, typeof c)


{
    let a=66;
    console.log(a);
}
console.log(a); 
// var: var is globally scoped and let and const are block scoped
const a1=6;
// a1=a1 plus 2;  and cannot do this a1 is constant

// var is globally scoped not block scoped as does the let 
// we should use the block scoped like let not var to change value in every closed brackets

//var can be updated and redeclared and let can also be updated but not redeclared and const can never be redeclared nor can be updated
//const should be initialized during declaration
//primitive data types//
//number, string, boolean, null, undefined, symbol, bigInt

let x= "Qashi";
let y=23;
let z=3.55;
const p=true;
let q=undefined;
let r= null;
console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)
//type of null is object (why)(interview question)     it is also considered as a historical bug 
//also too much code already depended on this behavior. Changing it could have broken a lot of existing JavaScript code



           //OBJECTS IN JAVA SCRIPT//
           let o={
            "name" : "Qashi" ,  //here name is the key and Qashi is the value
            "job role" : 5600,
            "is_handsome" :true
           }
           console.log(o);
           //we can also modify the object
           o.salary="100crores";
           console.log(o)
           o.salary="500crores"
           
           console.log(o)
