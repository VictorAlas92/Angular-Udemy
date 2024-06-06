export function WhatsMyType<T>(argument: T): T {
  return argument;
}

let amIString = WhatsMyType<string>("Hola mundo");
let amINumber = WhatsMyType<number>(100);
let amIArray = WhatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));
