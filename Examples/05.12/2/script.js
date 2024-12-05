const products = [
    { name: 'Phone', price: 250000 },
    { name: 'Bread', price: 20000 },
    { name: 'Egg',   price: 900 },
    { name: 'Milk',  price: 1000 },
    { name: 'Meat',  price: 9000 },
    { name: 'Rice',  price: 400 },
    { name: 'Oil',   price: 6000 },
];

function namesOfProduct() {
    let names = [];
    products.forEach(function (product) {
        names.push(product.name);
    });

    return names
};

function allPrice() {
    return products.reduce((total, product) => total + product.price, 0);
}

function filteredPrice() {
    return products.filter((product) => product.price > 1000);
}

function discountProduct() {
    let product = products.filter((product) => product.price > 10000);
    return product.map((product) => ({
        name: product.name,
        price: product.price - ( product.price * 0.15),
    }));
}

console.log(discountProduct());

console.log(filteredPrice());
console.log(allPrice());
console.log(namesOfProduct());
