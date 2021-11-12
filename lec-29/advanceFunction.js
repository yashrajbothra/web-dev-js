// function declaration
// function add(...args) {
//     console.log(args)
//     let total = 0;
//     for (let i = 0; i < args.length - 1; i++) {
//         total += args[i];
//     }
//     return total;
// }


// function expression
// let add1 = (a = 2,b = a,c=a*b) => {
//     return a + b + c;
// }
// console.log(add1())

// function greeting(name) {
//     console.log(`Good Morning ${name} Sir`);
// }

// function processUserInput(callback) {
//     let name = prompt("Enter your name");
//     callback(name);
// }


// processUserInput(greeting);
// console.log(add(1, 2, 3, 4, 5, 6, 7))

function Car(name){
    this.name = name;
    this.start = function(callback) {
        callback.call(this,this.name)
        callback.apply(this,[this.name])
        callback = callback.bind(this,this.name)
        callback(this.name)
    }
}

let swift = new Car('Swift');
// swift.start();

swift.start(function(name){
    console.log(name + ' started');
    console.log(this)
})