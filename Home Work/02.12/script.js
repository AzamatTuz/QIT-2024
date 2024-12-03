const book = {
    title: 'Убийства по алфабиту',
    author: 'Агата Кристи',
    pages: 320,
    isRead: true,
    readbook: function () {
        return 'Сіз ' + this.title + ' кітабын ' + this.author + ' жазған оқып жатырсыз.';
    },
    toggleReadStatus: function () {
        this.isRead = !this.isRead;
        return this.isRead;

    }
}

console.log(book.readbook());
console.log(book.toggleReadStatus ? 'Siz myna kitapty okygansyz' : 'Siz myna kitapty okymagansyz');



