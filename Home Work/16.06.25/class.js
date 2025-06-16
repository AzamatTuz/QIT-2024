export class Animal {
    constructor(name, weight, sound) {
        this.name = name,
        this.weight = weight,
        this.sound = sound
    }
    show() {
        return { name: this.name, weight: this.weight, sound: this.sound }
    }
}