  async function getData() {
   return new Promise((resolve ,reject)=>{
     
    setTimeout(() => {
        resolve(355);
    }, 2000);

   })
}
  async function getData2() {
   return new Promise((resolve ,reject)=>{
     
    setTimeout(() => {
        resolve(355);
    }, 3000);

   })
}
  async function getData3() {
   return new Promise((resolve ,reject)=>{
     
    setTimeout(() => {
        resolve(355);
    }, 4000);

   })
}
  async function getData4() {
   return new Promise((resolve ,reject)=>{
     
    setTimeout(() => {
        resolve(355);
    }, 5000);

   })
}
   
 
  
  async function main(){ 
     
  setInterval(() => {
    document.getElementById(1).last.innerHTML + ".";
  }, 700);
  console.log(document.getElementById("1").innerHTML);
   await getData();
  console.log(document.getElementById("2").innerHTML);
  await getData2();
  console.log(document.getElementById("3").innerHTML);
  await getData3();
  console.log(document.getElementById("4").innerHTML);
  await getData4();
  console.log(document.getElementById("5").innerHTML);
 
  }
main();
  