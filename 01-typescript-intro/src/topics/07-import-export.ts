import { Product, taxCalculation } from "./06-function-destructuring";

const shoppinCard: Product[] = [
  {
    description: "nokia",
    price: 100,
  },
  {
    description: "ipad",
    price: 150,
  },
];
const [total, totaltax] = taxCalculation({
  tax: 0.15,
  products: shoppinCard,
});

//tax 15%
console.log("Total", total);
console.log("Tax", totaltax);
