const book = {
    title: 'Убийства по алфабиту',
    author: 'Агата Кристи',
    pages: 320,
    isRead: true,
    readbook: function () {
        console.log('Сіз ' + this.title + ' кітабын ' + this.author + ' жазған оқып жатырсыз.');
    },
    toggleReadStatus: function () {
        console.log("Оқу күйі жаңартылды: " + this.isRead);
        
    }
}

book.readbook()
book.toggleReadStatus()


