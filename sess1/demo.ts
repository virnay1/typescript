function demo(){
  let isDone: boolean = true;

  let decimal: number = 6;
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;

  let color: string = "blue";
  color = 'red';

  let fullName: string = `Bob Bobbington`;
  let age: number = 37;
  let sentence: string = `Hello, my name is ${ fullName }.

  I'll be ${ age + 1 } years old next month.`;

  document.write(sentence);

}