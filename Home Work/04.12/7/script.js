const library = {
    name: 'Alatau HUB',
    books: [
        { name: 'book A', pages: 300 },
        { name: 'book B', pages: 100 },
        { name: 'book C', pages: 340 },
        { name: 'book D', pages: 1000 },
    ],
    findMiddlePages: function () {
        let allPages = this.books.reduce((total, book) => total + book.pages, 0);
        return allPages / this.books.length;
    },
    findBigPages: function () {
        return this.books.sort((a, b) => b.pages - a.pages)[0];
    },
    findSmallPages: function () {
        return this.books.sort((a, b) => a.pages - b.pages)[0];
    }
};

console.log(library.findBigPages());
console.log(library.findSmallPages());


console.log(library.findMiddlePages());
