console.log("this is promises");

let prom1=new Promise ((resolve,reject) => {  
    let a=Math.random();
    if(a>0.5){
        reject("Random number is not supporting me");
    } 
    else{
    setTimeout(() => {
        
        console.log("hi this is m qasim");
        resolve("Harry");

    }, 3000);
}
})

// let prom2=new Promise ((resolve,reject) => {  
//     let a=Math.random();
//     if(a>0.5){
//         reject("Random number is not supporting youuu 2");
//     }

//     else{
//     setTimeout(() => {
        
//         console.log("hi this is m qasimmm 2");
//         resolve("Harry2");

//     }, 1000);
// }
// })

// promise.all                   
// let p3=Promise.all([prom1,prom2])
// p3.then((a) => { 
//     console.log(a);
// })
// .catch((err) => { 
//     console.log(err)
//  });   



// //promise.allSettled
// let p3=Promise.allSettled([prom1,prom2])
// p3.then((a) => { 
//     console.log(a);
// })
// .catch((err) => { 
//     console.log(err)
//  });   



// //promise.race                             the promise which will settle its result or error first will become the output
// let p3=Promise.race([prom1,prom2])
// p3.then((a) => { 
//     console.log(a);
// })
// .catch((err) => { 
//     console.log(err)
//  });   




//promise.any              it will print the one completely first if resolved, if rejected both then it will print an error
//  let p3=Promise.any([prom1,prom2])
// p3.then((a) => { 
//     console.log(a);
// })
// .catch((err) => { 
//     console.log(err)
//  });   



//promise.resolve  difference between p.resolve and p.any is resolve will imediately print the forst one resolved but in case of any  it will check all the p and is applicable to the array only
//  let p3=Promise.resolve([prom1,prom2])
//  p3.then((a) => { 
//      console.log(a);
//  })
//  .catch((err) => { 
//      console.log(err)
//   });   


//promise.reject
//   let p3=Promise.reject([prom1,prom2])
//  p3.then((a) => { 
//      console.log(a);
//  })
//  .catch((err) => { 
//      console.log(err)
//   });   