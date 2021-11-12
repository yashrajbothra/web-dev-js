// Exercise 01
let square = {
    side: 5,
    get area() {
        return this.side ** 2
    }
}
























// square.side = 10
// console.log(square.area)




























// Exercise 02
function stringConcat(separator, ...strings) {
    let returnVal = ''
    strings.forEach((string, i) => {
        if (i == strings.length - 1) {
            returnVal += string;
        }
        else {
            returnVal += string + separator;
        }
    })
    return returnVal;
}



























// console.log(stringConcat('+', 'this', 'is', 'invalid'))



























// Exercise 03
let [first, second, third, ...other] = [1, 2, 3, 4, 5, 6, 7, 8]






























// console.log(first)
// console.log(second)
// console.log(third)
// console.log(other)






























// Exercise 04
function matchHouses(house) {
    if (house <= 0) {
        return 0;
    } else {
        return house * 6 - house + 1
    }
}































console.log(matchHouses(0))

console.log(matchHouses(4))

console.log(matchHouses(87))























