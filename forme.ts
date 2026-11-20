class Rectangle{
    constructor(private name: string, protected a: number, private b: number){}
    area(): number {
        return this.a * this.b; 
    }
}
class Circle{
    constructor(private name: string, private r: number){}
    area(): number{
        return Math.PI*this.r*this.r;
    }
}
class Square extends Rectangle{
    constructor(name:string, a:number){
        super(name,a,a);
    }
    override area() : number {
        return this.a * this.a;
    }
}

const e = new Rectangle("r1",3,4); 
console.log(e.area()); 

const formes = [
  new Rectangle("r1", 3, 4),
  new Circle("c1", 2),
  new Square("s1", 5),
];

const aires = formes.map(f=> f.area()); 
console.log(aires);
const pasplusquequinze = formes.filter(f=>f.area()<15); 
console.log(pasplusquequinze); 
const reduce = formes.reduce((sum, f) => sum + f.area(), 0);