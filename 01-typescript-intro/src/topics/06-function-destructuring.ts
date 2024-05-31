export interface Product {
  description: string;
  price: number;
}
const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};
const tablet: Product = {
  description: "Ipad Air",
  price: 250.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

//function taxCalculation(opctions: TaxCalculationOptions): Number[] {
export function taxCalculation(
  opctions: TaxCalculationOptions
): [number, number] {
  //function taxCalculation({tax,products}: TaxCalculationOptions): [number, number] {
  const { tax, products } = opctions;
  let total = 0;
  //opctions.products.forEach((producto) => {
  //opctions.products.forEach(({ price }) => {
  products.forEach(({ price }) => {
    //total += producto.price;
    total += price;
  });

  return [total, total * tax];
}

const shoppingCard = [phone, tablet];
const tax = 0.15;

//const result = taxCalculation({
//  tax: tax,
//  products: shoppingCard,
//});
const [total, totalTax] = taxCalculation({
  tax: tax,
  products: shoppingCard,
});

console.log("Total: ", total);
console.log("Tax: ", totalTax);
