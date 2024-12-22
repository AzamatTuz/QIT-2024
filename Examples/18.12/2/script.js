const books = [
    { title: 'The A.B.C. Murders', description: 'A surprising novel tackling the modern figure of the serial killer and the psychology behind it' },
    { title: 'Harry Potter', description: 'Harry had a thin face, knobbly knees, black hair and bright-green eyes' },
    { title: 'Murder on the Orient Express', description: 'An American tycoon lies dead in his compartment, stabbed a dozen times, his door locked from the inside. Isolated and with a killer in their midst, detective Hercule Poirot must identify the murderer – in case he or she decides to strike again.' },
    { title: 'The Big Sleep', description: 'Private investigator Philip Marlowe goes to the wealthy General Sternwoods home on a job.' },
];


const cont = document.getElementById('cont');
cont.style.display = 'grid'
cont.style.gridTemplateColumns = '1fr 1fr'
cont.style.gap = '20px'
cont.style.fontFamily = 'sans-serif'

books.forEach((book) => {
    const card = document.createElement('div');
    const title = document.createElement('h1');
    const close = document.createElement('button');

    close.textContent = 'Delete'

    card.style.width = '600px'
    card.style.border = '2px solid black'
    card.style.borderRadius = '20px'
    card.style.padding = '20px'
    
   
    title.textContent = book.title;
    card.textContent = book.description

    card.appendChild(title);
    cont.appendChild(card);
    card.appendChild(close);

    close.addEventListener('click', () => {
        card.remove()
    })
    
})

