const username=["aashu","sandeep","kashish","anup","ram","vicky"]
//const filterusername=username.filter((username,array,index)=>{
  //  console.log(index+1,username);
    //return false
//})
//const filterusername=username.filter((username,array,index)=>{
  //  console.log(username.length);
    //return true
//})
//const filterusername=username.filter((username,array,index)=>{
  //  console.log(username.length<=5);
    //return true//false
//})
//const filterusername=username.filter((username,array,index)=>{
    //console.log(username.length<=5);
  //  return username.length<=5
//})
//const filterusername=username.filter((username,array,index)=>{
  //console.log(username);
  //return username.includes("m")
//})
//const filterusername=username.filter((username,array,index)=>{
  //console.log(username);
  //return username.toLocaleLowerCase().includes("a")
//})
//const filterusername=username.filter((username,index,array)=>{
  //console.log(username);
//  return index >= 3
//})


const students=[
  {
    name:"aashu",
    age:20
  },
  {
    name:"amit",
    age:24
  },
  {
    name:"sandeep",
    age:18
  },
  {
    name:"anup",
    age:26
  },

]
const filterstudents=students.filter((students)=>{
//console.log(students.age>=20);
 return students.age>=20
}).map((students)=>{
//console.log(students.age>=20);
return students.name
}).filter((students)=>
{
  return students.includes("aa")
})




  //const mapping=students.map((students)=>{
  //console.log(students.age>=20);
  //return students.name
  //})