class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
function demo() {
   let greeter = new Greeter("world");
   document.write(greeter.greet());
}
