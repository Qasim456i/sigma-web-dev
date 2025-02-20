//  async function getData(){
// simulate get data from the server 
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3400);


//     })
//  }
 async function getData(){
   // let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')


   let x=await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
   let data=await x.json();
   console.log(data)
   
 }
 //Settled means resolved or rejected and 
 //relsolved means promise has settled successfully and reject means promis has not been settled

 async function main(){

 console.log("Loading modules");
 console.log("do something else");
 console.log("Load data")
 let Data= await getData();
   
    console.log("Process data")

 }
 main();
 
//  console.log("Loading modules");
// console.log("do something else");
// console.log("Load data")
// let Data=getData();
// Data.then((v)=>{
//     console.log("Data")
//     console.log("Process data")
// })
