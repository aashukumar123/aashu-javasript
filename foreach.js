const username=["aashu","sandeep","kashish","anup","ram"]

//for(const name of username)
//{
// console.log(name);
//}
//username.forEach(function (name){//ye hai for each method  or usually for each return nothing(undefine)
//console.log(name);
//})

//username.forEach((name) => {//arrow method use here
  //console.log(name);

//})
//console.log(username.map((name)=>{
  //console.log(name);
  //return name.toUpperCase()
//}))

//console.log(username.map((name,index)=>{
 // console.log(index+1,name);
 // return name.toUpperCase()
//}))

const capitalusername=username.map((name,index)=>{
  console.log(index+1,name);
  return name.toUpperCase()
})

//const capitalusername=username.map((name,index)=>{
 // console.log(index+1,name);
 // return index+1
//})





// function abc(el) {
//     console.log(el);
// }

// fruits.forEach(abc)
