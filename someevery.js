//some function//if the value in array find true then make all value true and if alll are fasles then print false.
//every function ://if one of the value is false then male all value false and if all value true then give a output true. 
const evenNumbers = [0, 2, 10, 4, 61, 8]


 const result = evenNumbers.some((num, i) => {
     if(num % 2 === 1) {
         console.log(i);
   }
     return num % 2 === 1
})

//const result = evenNumbers.every((num) => {
    
   // return num % 2 === 0
//})