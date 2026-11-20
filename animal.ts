class Animal {
    constructor(protected name: string) {}
    parler(): string {
        return `${this.name} fait un bruit.`;
    }
}
class Chien extends Animal {
    parler(): string {
        return `${this.name} aboie.`;
    }
}
const monChien = new Chien("Rex"); 
console.log(monChien.parler());