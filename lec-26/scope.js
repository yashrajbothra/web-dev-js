// // the scope is by default global
// var name = 'Amal';

// function sayName() {
//   var marks = 10;
//   console.log(name);
// }

// sayName()
// console.log(marks);





























// var x = 0;

// // Global Scope
// function first() {
//   // Local Scope #1
//   var x = 1;
//   console.log(x);
//   function childOfFirst() {
//     var x = 2;
//     console.log(x);
//       // Local Scope #2
//   }
//   childOfFirst()
// }

// first()

// // Global Scope
// function second() {
//   console.log(x);
//   // Local Scope #3
// }
// // Global Scope
// second()


// let x =10 
// {
//   let x = 1;
//   console.log(x);
// }

// console.log(x);



























// if (true) {
//   // this 'if' conditional block doesn't create a new scope
//   var foo = 'bar';
// }

// console.log(foo);































// Lexical Scope
function Dada() {
  var name = 'Amalesh Kumar';
  // likes is not accessible here
  function Papa() {
    console.log(name);
      // name is accessible here
      // likes is not accessible here
      function Beta() {
          // Innermost level of the scope chain
          // name is also accessible here
          var likes = 'Coding';
      }
      console.log(likes);
      Beta()
  }
  Papa()
}
Dada()





























