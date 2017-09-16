class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
    public showName(): void{
        console.log(this.name);
    }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}
function demo() {
    // Error: 'name' is private;
    //let someAnimal =  new Animal("Cat").name; 

    let animal = new Animal("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");

    animal = rhino;
    // Error: 'Animal' and 'Employee' are not compatible
    //animal = employee; 
    animal.showName();
}
