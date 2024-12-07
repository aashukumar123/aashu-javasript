//const nums=[1,1,2,1,1,1]
//nums.reduce((accumulator,current,i)=>
//{
 //   console.log(accumulator);
//})


//const nums=[1,1,2,1,1,1]
//nums.reduce((accumulator,current,i,array)=>
//{
   //console.log(current,i);
  // console.log(accumulator);
   //return 8
//},10)

const nums=[1,2,3,1,1,1]
//nums.reduce((accumulator,current,i)=>
//{
   //console.log(current,i);
   //console.log(accumulator);
  // return "anurag"
//},10)


//const name=nums.reduce((accumulator,current,i)=>
    //{
       //console.log(current,i);
      // console.log(accumulator);
      // return accumulator + current//jo array ke index main jo bhi hai wo accumulator ho jaayega(1)and current bhi 1then after current 2 and acumulator is 3
    //})

    //const name=nums.reduce((accumulator,current,i)=>
        //{
           //console.log(current,i);
          // console.log(accumulator);
         //  return accumulator + current//10 is acumuator and 1 is current array and add karne par acumulator 11 ho jayega or current next postion if array(2)
       // },10)


        const name=nums.reduce((accumulator,current,i)=>
            {
               console.log(current,i);
               console.log(accumulator);
               return accumulator*current
            },10)