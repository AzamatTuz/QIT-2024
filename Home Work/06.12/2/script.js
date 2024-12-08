const books = [
    { title: 'Harry Potter', author: 'J. K. Rowling', year: 1997 },
    { title: 'Alphabet Murders', author: 'A. Christi', year: 1971 },
    { title: 'The Adventure of the Mazarin Ston', author: 'Arthur Conan Doyle', year: 1921 },

]

function findTheBook() {
    let nameBook = prompt('Kitaptyn atyn engiziniz');
    for (let i = 0; i < books.length; i++) {
        if (books[i].title == nameBook) {
            alert('Bul Kitap bar')
            let yearBook = +prompt('Jana jylyn jaz');
            books[i].year = yearBook;
            alert(`Kitaptyn aty ${books[i].title}, avtory ${books[i].author}, janartylgan jyly ${books[i].year}.`)
        }
    }

}

findTheBook()