//function add(a,b)
//{
//return a+b
//}when we put function in object is called method
//all function is method but all method is not function
const maths = {
    E: 2.718281828459045,
    add: function (a, b) {
      return a + b
    },
    square: function(num) {
       return num * num;
    },
    subtract(a, b) {
      return a - b
    },
    cube(num) {
      return num ** 3
    }
  }