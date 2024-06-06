function classDecorator(constructor: any) {
  return class extends constructor {
    newProperty = "New Property";
    hello = "override";
  };
}

// @classDecorator
export class superClass {
  public myProperty: string = "abc123";
  print() {
    console.log("Hola Mundo");
  }
}

console.log(superClass);
const myClass = new superClass();
console.log(myClass);
