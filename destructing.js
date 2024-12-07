const colors =["yellow","green","red","orange","blue"]
//const colors1=colors[0]
//const colors2=colors[1]
//const colors3=colors[2]

const[colors1,colors2,colors3,b,r]=colors//from destructing

//const[,,,colors3]=colors
//const {3:colors3,5:colors5}=colors//third method


const user={
    name:"aashu",
    age:16,
    address:{
        city:"aya nagar",
        state:"karnatak"

    }

}
//const noop=user.age
//const soop=user.address.city

const{name,age}=user//destructing method

//const {name:username,age:userage}=user//wrong

//const{address:{city}}=user//multilevel destructing
//same method in above
//const {address}=user
//const {city}=address




//function intro(userobj)
//{
  //  console.log(userobj);
//}

//intro(user)


function intro({age,name})//destructing method
{
    console.log(age,name);
}

intro(user)




//function printcolors(userboy)
//{
  //  console.log(userboy);
//}
//printcolors(colors)




//function printcolors([a,b,,r])
//{
 //   console.log([a,b,,r]);
//}
//printcolors(colors)




function printcolors([a,b,,r])
{
 console.log([a,b,,r]);
}
printcolors(colors)

//function printcolors({3:colors5})
//{
    console.log(colors5);
//}
//printcolors(colors)