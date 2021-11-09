// let counter = createCounter();
// let counter1 = createCounter();

// function createCounter() {
//     return {
//         count: 0,
//         increment: function () {
//             this.count++;
//             console.log(this);
//         }
//     }
// }
// counter.increment();
// counter1.increment();

// var count = 0;
// function incrementCounter() {
//     this.count++;
//     console.log(this);
// }

// incrementCounter();
// incrementCounter();
// incrementCounter();
// incrementCounter();
console.log(this);


function Car(name){
    this.name = name;
    this.start = function(){
        console.log(this.name + ' started');
        console.log(this)
    }
}

let swift = Car('Swift');
// swift.start();

console.log(name)
