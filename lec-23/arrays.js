const num = new Array(1,2,3,4,5,6,7,8,9);

// Push
num.push(10)

// Unshift
num.unshift(0)

// Pop
num.pop()

// Shift
num.shift()

const names = ['Amal','Dhanvan','Akash','Akshit','Neha','Supriya'];

// indexOf
names.indexOf('Akash');

// lastIndexOf
names.lastIndexOf('Akash')

// includes
names.includes('Akshit')

let channels = [{
    name: 'Apna College',
    subscriber: 10000
}, {
    name: 'Apni Kaksha',
    subscriber: 20000
}, {
    name: 'Aman Dhattarwal',
    subscriber: 50000
}];

let names1 = ['Amal','Dhanvan','Akash']
let names2 = ['Akshit','Neha','Supriya']
// let names3 = names1.concat(names2)
let names3 = [...names1,...names2]


// For Loop
for(let i = 0;i<names.length;i++){
    // console.log(names[i])
}

// For of
for(let name of names){
    // console.log(name)
}

// for-each
names.forEach(function(name,index){
    // console.log(name, index);
})

// Join
let student = ['S','h','i','v','a'];
student = student.join('_');

// Spilt
// console.log(student.split('_'))

// Filter
let cities = [
    {name: 'Mumbai', population: 3792621},
    {name: 'Delhi', population: 8175133},
    {name: 'Bangalore', population: 2695598},
    {name: 'Chennai', population: 2099451},
    {name: 'Lucknow', population: 1526006}
];

// console.log(cities.filter(city => city.population > 3000000))
console.log(cities.map(city => city.population * 2))


