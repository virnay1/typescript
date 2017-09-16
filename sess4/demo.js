var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.showName = function () {
        console.log(this.name);
    };
    return Animal;
}());
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal));
var Employee = (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
function demo() {
    // Error: 'name' is private;
    //let someAnimal =  new Animal("Cat").name; 
    var animal = new Animal("Goat");
    var rhino = new Rhino();
    var employee = new Employee("Bob");
    animal = rhino;
    // Error: 'Animal' and 'Employee' are not compatible
    //animal = employee; 
    animal.showName();
}
