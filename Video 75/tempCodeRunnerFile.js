let p3=Promise.race([prom1,prom2])
p3.then((a) => { 
    console.log(a);
})
.catch((err) => { 
    console.log(err)
 });   