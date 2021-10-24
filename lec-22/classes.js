// Declaring a Class
class Product {
    constructor(itemName){
        console.log('Passed by Furniture' + itemName);
        this.itemName = itemName;
    }

    getItemName(){
        return this.itemName + " is a Product";
    }
}

class Furniture extends Product {
    constructor(itemName){
        super(itemName);
    }

    getItemName(){
        return this.itemName + " is a Furniture"
    }
    
}

// let pencil = new Product('Pencil');
let chair = new Furniture('Chair')


// const Product1 = class {
//     constructor(itemName,price,discount,productCode){
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
//     get getDiscountValue(){
//         return this.discount;
//     }
//     set setDiscountValue(value){
//         this.discount = value;
//     }
//     discountValue(){
//         return this.discount*this.price/100
//     }
// };

// let chair = new Product1('Chair', 499, 15, 'C10')


