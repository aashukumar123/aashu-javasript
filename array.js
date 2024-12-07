
const username = 'Anurag Singh'

const fruitsCollection = ['Apple', 'Banana', 'Grapes', 'Dates']

const newObject = {}
const newArray = []
console.log(fruitsCollection.slice(1,3));
console.log(fruitsCollection.splice(1,2));//strating point and number of removing element
const animals=[1,4,5,2,7,8,6,5,]
console.log(animals.slice(2,8));//slice take some value from array starting to ending

console.log(animals.splice(2,3,455,6787,456,789,1234));//strating point and number of removing element and if you want to add some value then you can add ... 
const nameAndNumberList = [
    ['Adarsh', 75],
    ['Akash', 90],
    ['Anurag', 9],
  ]
  
  const ticTacToe = [
      ['X', null, null],
      [null, null, 'O'],
      ['O', null, 'X']
  ]
  // const username1 = 'Anurag'
// let username2 = username1
// username2 = username2 + ' Singh'

const fruits = ['Mango', 'Apple', 'Orange']

// const myFruits = fruits

// myFruits.push('Dates')
// myFruits.push('Grapes')

// Object.assign(myFruits, fruits)
const myFruits = [...fruits]

// const myFruits = [].concat(fruits)
// const myFruits = fruits.slice()

const user1 = {
  firstName: 'Anurag',
  lastName: 'Singh',
  pata: {
    city: 'Delhi',
    pincode: 989888,
  },
  subject: ['Physics', 'CS', 'Maths']
}

// Shallow Copy

// const user2 = {}
// Object.assign(user2, user1)
const user2 = { ...user1 }
let num = 5

// debugger
// num = num + 5
// num = num + 5
// num = num + 5
// num = num + 5

// num += 5
// num += 5
// num += 5
// num += 5

// num = num * 2
// num = num * 2
// num = num * 2

// num *= 2
// num *= 2
// num *= 2

// const newNum = ++num
// const newNum = --num

// const newNum = num++
// const newNum = num--

// num = num + 1
// num += 1

num++