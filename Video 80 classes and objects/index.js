// let obj={
//     a:1,
//     b:"harry"
// };
// console.log(obj);

// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// };

// rabbit._proto_=animal;//to make animal jumpps ture without objects and classes (Alternative)

class Animal{
    constructor(name){
        this.name=name;
        console.log("Object is create...")
    }

    eats(){
        console.log("kha rha hu...")
    }

    run(){
        console.log("Bhag rha hu ..")
    }
}

class lion extends Animal{
    constructor(name){
        super(name);
        
        console.log("Object is create... and his name is shera")
    }

}

let a=new Animal("bunny");
console.log(a);
let l=new lion("Shera");
console.log(l);