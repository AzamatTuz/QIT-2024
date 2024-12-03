const book = {
    title: 'Убийства по алфабиту',
    author: 'Агата Кристи',
    pages: 320,
    isRead: true,
    readbook: function () {
        return `Сіз ' ${this.title} ' кітабын ' ${this.author} ' жазған оқып жатырсыз.
        Difficulty: ${this.hardLevel()}`;
    },
    toggleReadStatus: function () {
        this.isRead = !this.isRead;
        return this.isRead;
    },
    hardLevel: function () {
        if (this.pages <= 200) {
            return 'Easy';
        } else if (this.pages > 200) {
            return 'Middle';
        } else {
            return 'Hard'
        }
    },
}

console.log(book.readbook());
console.log(book.toggleReadStatus() ? 'Siz myna kitapty okygansyz' : 'Siz myna kitapty okymagansyz');



