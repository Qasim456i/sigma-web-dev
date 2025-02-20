console.log("Functions")
function nice(name){
    console.log("Hey " + name+ " u are nice")
    console.log("Hey" + name+ " u are nice")
console.log("Hey" +name +" u are wonderful")
console.log("Hey" +name + " u are excellent")
}
nice("harry");
function sum(a,b,c=5){
   return a+b+c
}
result1=sum(19,45)
result2=sum(1,5)
result3=sum(69,75)
console.log("the value of sum is : ",result1,result2,result3)

//arrow function

const func1= (x)=>{
    console.log("hello world",x)
}
func1(100)
func1(95)
func1(67)