// Exercise using Objects
// itemName
// price
// discount
// itemCode

const product = {
    itemName: 'Flower',
    price: 50,
    discount: 20,
    itemCode: 'F40'
}

function createProduct(name, price, discount, itemCode) {
    return {
        itemName: name,
        price: price,
        discount: discount,
        itemCode: itemCode
    }
}

const football = createProduct('football', 400, 10, 'F30');

function Product(name, price, discount, itemCode){
    this.itemName = name;
    this.price = price;
    this.discount = discount;
    this.itemCode = itemCode;
    this.discountValue = function(){
        return price * discount/100;
    }
}

const mobile = new Product('Oneplus Nord', 30000, 5, 'OP20')

