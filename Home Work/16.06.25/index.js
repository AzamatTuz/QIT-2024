import { Animal } from "./class";

const dog = new Animal('Dog', 32, 'Gav gav')
const cat = new Animal('Cat', 15, 'Myau myau')
const horse = new Animal('Horse', 85, 'Igogo')
const animals = [dog.show(), cat.show(), horse.show()]
const finded = null
function find() {
    animals.forEach((animal) => {
        if (find) {
            if (animal.weight > finded.weight) {
                finded = animal
            }
        } else {
            finded = animal
        }
    })
}

find()
console.log(finded);

