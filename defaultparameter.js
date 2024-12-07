//function multiply(a, b=1) {
  //  return a * b
  //}
  

// not giving a parameters at run time
 // function rollADie(numberOfSides=6 ) {
   // return Math.floor(Math.random() * numberOfSides) + 1
  //}//this a program of roll a dice...
  //only upto 6 ro any  number tak

//spread operator(...) is operator to help in combining array (two array)and object (two object) 




//const num1=[1,2,4,5,6,7,3]
//const num2=[3,5,1,6,7,8,9]
//const jointarray =[...num1,...num2]

//const myname="anurag"//spread operator

//const user={
 // name:"aashu",
 // age:18,
//}

//const updateduser ={
  //...user,city:"aya nagar"
//}


 //function add()
//{
  //console.log(arguments);
  //  let sum=6;
   //for(let i=0;i<arguments.length;i++)
   //{
    //sum=sum+arguments[i]
   //}
   //return sum

//}


//const nums1=[1,2,3,4]
//function add(...nums)//rest perameter
//{
  //console.log(nums);
   // let sum=6;
   //for(let i=0;i<arguments.length;i++)
   //{
    //sum=sum+arguments[i]
   //}
   //return sum
//}

//const nums1=[1,2,3,4]
//function add(...nums)//rest perameter
//{
  //console.log(nums);
 //   let sum=6;
 //  for(let i=0;i<nums.length;i++)
 //  {
 //   sum=sum+nums[i]
 //  }
  // return sum
//}


//const nums1=[1,2,3,4]
//function add(...nums)//rest perameter is colect all element in array where as spread operator is spread the element
//{
  //console.log("nums:",nums);
   // let sum=6;
   //for(let i=0;i<nums.length;i++)
   //{
  //  sum=sum+nums[i]
  // }
 //  return sum
//}

//onst nums1=[1,2,3,4]
//function add(a,b,c,...nums)
//{
  //console.log(a,b,c);
  //console.log("nums:",nums);
  //  let sum=6;
   //for(let i=0;i<nums.length;i++)
   //{
   // sum=sum+nums[i]
  // }
  // return sum
//}
//const result = add(1,2,3,34,5,6)




// function add() {
//   return [...arguments].reduce((acc, curr) => acc + curr)
// }

// function add() {
//   return Array.from(arguments).reduce((acc, curr) => acc + curr)
// }

function add(...nums)//rest opeartor {
  return nums.reduce((acc, curr) => acc + curr)
}

const result = add(...nums1)//spread operator