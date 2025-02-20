let arr=[1,3,5,7,11,13];
//let newArr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//  newArr.push(element**2)   
// }
// console.log(newArr)


//map property
let newArr=arr.map((e,index,array)=>{

return e**2
})
console.log(newArr)

//filter
const greaterThanSeven=(e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(newArr.filter(greaterThanSeven))
let arr2=[2,5,3,6,7]

const red= (a,b)=>{
    return a*b;//can also do plus minus anything else
}

console.log(arr2.reduce(red))






//way to form an array
console.log(Array.from("Qashi"))
