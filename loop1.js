//const fruits=["mango","apple","orange","dragon fruit","water melon"]
//for(const fruit of fruits)
//{
 //   console.log(fruit);
//}

const username={
    name:"aashu",
    class:10,
    subject:"english",
}
//for(const key in username)
//{
  //  console.log(username[key]);
//}
for(const key in username)//this method we always use
    {
        console.log(key,":",username[key]);
    }

    //second methoded
    const usernameKeys = Object.keys(username)//values only
    const usernameValues = Object.values(username)//values in array form
const usernameEntries = Object.entries(username)//keys values of array and within also a array
    // for (const key of usernameKeys) {
//     console.log(username[key]);
// }