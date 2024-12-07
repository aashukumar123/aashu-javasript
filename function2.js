const username = 'Anurag'
let userAge = 25
var a = 50

function add() {
  debugger
  const username = 'Akash'
  const x = 5
  const y = 8
  console.log(x + y)
  console.log(username)
}

function subtract() {
  const x = 15
  const y = 18
  console.log(x - y)
  console.log(username)
}

add()
subtract()

console.log('Program Ended')
//when we use variable of upper function in inner function that inner function make clousre.
const username = 'Anurag'
let userAge = 25
var a = 50

// function add() {
//   const username = 'Akash'
//   const x = 5
//   const y = 8
//   console.log(x + y)
//   console.log(username)
// }

function subtract() {
  const x = 15
  const y = 18
  const z = 28
  // console.log(x - y)
  // console.log(username)

  function child() {
  // debugger

    const childName = 'Golu'
    // console.log(childName);
    // console.log(x,z);

    if(true){
      let num1 = 78
      var num2 = 987
      console.log(num1);
      console.log(num2);
    }
    console.log(num2);

    function grandChild() {
      const grandChildName = 'Molu'
      // console.log(grandChildName);
    }
    grandChild()
  }


  child()

}

// add()
subtract()

console.log('Program Ended')
//all upper scope of function of  grandchild and grandchild scope alo include is called lexical scope..
//and inner scope have access of all upper scope but upper function not have access of inner scope
// block scope are that scope will accessable within a block not outside the block ...let and const are block scope variable..