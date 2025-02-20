console.log("ahmed is a hacker");
console.log("aliha is a hacker");


setTimeout(() => {
    console.log("I am inside set timeout");
}, 2000);//setimeout will be printed after all these even if there is no timer
console.log("ali is a hacker");




   const fn=()=> { 
    console.log("nothing");
    }
    
callback=(args,fn) => { 
    console.log(args);
    fn()
 }

const loadScript=(src,callback) => { 
    let sc=document.createElement("Script")
    sc.src=src;
    sc.onload=callback("harry",fn);
    document.head.append(sc);
 }
 loadScript("https:cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);