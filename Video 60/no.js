console.log("this is a string tutorial");
let  a="harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

//JS is called a forgiving language it shoes minimum errors           
console.log(a.length);
let n_name="Qashi";
let friend ="arsal";

console.log("my name is " +n_name  +"  my friends name is " +friend);
//this is possible due to template laterals
console.log(`my name is ${n_name} and my friends name is ${friend}`);
let b="harry"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.slice(1,5))//5th will be included in the output
console.log(b.slice(1));
console.log(b.replace("ha" ,74))//if there is ha two times then only one occurance will be replaced not the second one
console.log(b.concat(a,66,"rahul"))



let j ="  harry"
console.log(j)


let newj=j.trim()//it will remove white spaces 
console.log(newj)