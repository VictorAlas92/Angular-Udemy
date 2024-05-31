interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Molino de viento",
  details: {
    author: "mago de oz",
    year: 1998,
  },
};
const song = "newsong";

//const { song } = audioPlayer;
//!! desestructuracion de objetos
const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const { author } = details;

console.log("Song: ", anotherSong);
console.log("Duration: ", duration);
console.log("Details:", author);

//const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
//const trunks = dbz[3] || "Personaje no encontrado";
//!! desestructuracion de arreglos_ not found es en caso de que la posicion 3 no exista
const [, , p3 = "Not Found"]: string[] = ["Goku", "Vegeta", "Trunks"];
console.error("Personaje 3: ", p3);

export {};
