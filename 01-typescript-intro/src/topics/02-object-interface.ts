const skills: string[] = ["Bash", "counter", "Healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const VictorAlas: Character = {
  name: "Victor",
  hp: 100,
  skills: ["Bash", "Counter"],
  //hometown: 'GDL'
};

VictorAlas.hometown = "GDL";

console.table(VictorAlas);

export {};
