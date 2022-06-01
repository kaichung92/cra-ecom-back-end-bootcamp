export const deck = [
  "As",
  "2s",
  "3s",
  "4s",
  "5s",
  "6s",
  "7s",
  "8s",
  "9s",
  "Ts",
  "Js",
  "Qs",
  "Ks",
  "Ad",
  "2d",
  "3d",
  "4d",
  "5d",
  "6d",
  "7d",
  "8d",
  "9d",
  "Td",
  "Jd",
  "Qd",
  "Kd",
  "Ac",
  "2c",
  "3c",
  "4c",
  "5c",
  "6c",
  "7c",
  "8c",
  "9c",
  "Tc",
  "Jc",
  "Qc",
  "Kc",
  "Ah",
  "2h",
  "3h",
  "4h",
  "5h",
  "6h",
  "7h",
  "8h",
  "9h",
  "Th",
  "Jh",
  "Qh",
  "Kh",
];

export function shuffle(deck, repeats) {
  for (let i = 0; i < repeats; i++) {
    let j = Math.floor(Math.random() * (deck.length - 1));
    let k = Math.floor(Math.random() * (deck.length - 1));
    let temp = deck[k];
    deck[k] = deck[j];
    deck[j] = temp;
  }
  return deck;
}
