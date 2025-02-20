// async function sleep() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(45);
//         },1000);
//     })
// }

function sum(a,b,c){
    return a+b+c
}
//thi is called IIFE(imediately inoke function expression)
(async function main(){
//     let a=await sleep()
//     console.log(a)

//     let b=await sleep()
//     console.log(b)
// //additional concept
//     let [x,y,...rest]=[1,5,7,8,9,20]
//     console.log(x,y,rest);


    let obj={
        g:6,
        j:8,
        c:5
    }
    let {g,j}=obj
    console.log(g,j)
    let arr=[1,2,5]
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr))
})()


//hosting : if we print any variable first and then intialize it with varr it will be recognozed as an undefined but same thing with the let is not undefined it will say that there is no variable same case for const as let