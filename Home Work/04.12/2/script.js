const library = {
    books: [
        { title: 'Er tostik', author: 'Kazak Ertegileri', aviable: false},
        { title: 'Altyn Adam', author: 'Nurlan Esim', aviable: true},
    ],
    borrowBook: function () {
        let book = +prompt(`Bizde osyndai kitaptar bar\n1)${this.books[0].title}\n2)${this.books[1].title}`)
        
        if (book == 1) {
            if (this.books[0].aviable) {
                alert('Bul kitap bar alasyzba ?')
            } else if (!this.books[0].aviable) {
                alert('Bul kitap kalmady')
            }
        } else if (book == 2) {
            if (this.books[1].aviable) {
                alert('Bul kitap bar alasyzba ?')
            } else if (!this.books[1].aviable) {
                alert('Bul kitap kalmady')
            }
        }
    }
}

library.borrowBook()