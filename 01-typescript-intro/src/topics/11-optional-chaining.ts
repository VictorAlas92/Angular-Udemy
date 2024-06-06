export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Victor",
};
const passenger2: Passenger = {
  name: "Liza",
  children: ["Tesla", "Abby"],
};

const returnChildrenNumber = (passenger: Passenger): number => {
  const { name: name, children: children } = passenger;
  //   if (!children) return 0;
  const howManyChildren = children?.length || 0;
  //   const howManyChildren = children!.length;
  console.log(name, howManyChildren);
  return howManyChildren;
};

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);
