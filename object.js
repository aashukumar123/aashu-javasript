const username={
    name:"aashu",
    sirname:"kumar",
   "good-boy":"sandeep"

}
//console.log(username.name);
//console.log(username["name"]);
//console.log(username["good-boy"]);
//username.noop="sohan"
//console.log(username.noop)
//username["rohan"]="no entry"
//console.log(username["rohan"]);
const ram={
    "good-boy":"sandeep",
    sirname:"kumar",
    pata:{
        address:"g block",
        "phone-no":4566212355,
        animal:"ranvir kapor",
        detail:{
            content:"carryminaty",
            song:"yalgaar"
        }
    }


}
//onsole.log(ram.pata.detail.song)
//console.log(ram);
 //Object.seal(username) //use when u want to modefie your keys only Object.seal() is another method in JavaScript that prevents new properties from being added to an object and marks all existing properties as non-configurable Unlike Object.freeze(), Object.seal() allows the values of properties to be changed if they are writable. However, it prevents the addition or deletion of properties.
 
Object.freeze(username)
username.sirname="kaam"
//use when u want to freeze removing method from object and udating a object key and value pairs

//console.log('isGraduate' in user);if you find any key in object then uou use this. 