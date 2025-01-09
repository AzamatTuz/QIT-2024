const cards = document.querySelectorAll('.card');

function suffleImage() {

    cards.forEach(card => {

        const num = [...Array(cards.length).keys()]
        const random = Math.floor(Math.random() * cards.length)

        card.style.order = num[random];
    })
}

suffleImage()