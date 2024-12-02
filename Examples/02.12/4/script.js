const product = {
    name: 'Stiralnaya mashina',
    rating: 5,
    price: 294990,
    discount: function(percent) {
        return this.price - (this.price * percent) / 100;
    }
}

console.log(product.discount(16.99));


const person = {
    name: 'Aijan',
    age: 24,
    company: 'Kazakhmys',
    greet: function() {
        return `Hello, my name is ${this.name} I am ${this.age} y.o currently working in ${this.company}`
    }
}

console.log(person.greet());


const resMenu = {
    items: [
        {
            name: 'Pizza',
            price: 2.5,
            weight: 500,
            ingredients: ["dough", "peperoni", "cheese"],
        },
        {
            name: 'Sushi',
            price: 10,
            weight: 1000,
            ingredients: ['rice', 'fish', 'wassabi']
        },
    ],
}

resMenu.items.push({
    name: 'Pasta',
    price: 5,
    weight: 600,
    ingredients: ['carbonara', 'spaghetti', 'cheese'],
})

resMenu.items[1].ingredients.push('more rice')

console.log(resMenu.items);
