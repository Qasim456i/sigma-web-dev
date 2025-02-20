console.log("I am a tutorial on loops")

let a=1;
               //for loop//
for (let i = 0; i < 100; i++) {
    console.log(a+i);
    
}

              //for in loop//

    let obj={

        name: "Qasim",
        role :"Programmer",
        company : "noname"


    }
    // for (const key in ob) {
       
    //         const element = object[key];
    //         console.log(element,key);
            
        
    // }
// //if we only wanna print keys then
for (const key in obj) {

   
    console.log(key )

}

        // for of loop
        //it ia used to print characters generaly
for (const c of "Qasim") {
    console.log(c)
            
}
             //whilw loop
             let i=8;
             while(i<10){

                console.log(i)
                i++;
             }

             //doWhile loop
             let p=0;
             do {
                console.log(p)
                p++;

                
             } while (p<8);
              
