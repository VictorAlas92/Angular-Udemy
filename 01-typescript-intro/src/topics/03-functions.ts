function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
}

//const result: number = addNumbers(1, 2);
//const result2: string = addNumbersArrow(1, 2);
//const mutiplyResult: number = multiply(5);
//console.log({ result, result2, mutiplyResult });
interface Character {
  name: String;
  hp: number;
  shoHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
  if (character.hp >= 100) {
    character.hp = 100;
  }
};

const zelda: Character = {
  name: "Zelda",
  hp: 50,
  shoHp() {
    if (this.hp == 100) {
      console.log(`HP FULL`);
    } else {
      console.log(`puntos de vida ${this.hp}`);
    }
  },
};

healCharacter(zelda, 25);
healCharacter(zelda, 25);
healCharacter(zelda, -1);
zelda.shoHp();

export {};
