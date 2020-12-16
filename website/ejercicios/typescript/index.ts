// console.log("Hello Typescript");

// function add(a: number, b: number) : number {
//   return a + b;
// }

// console.log(add(1, 2));


//boolean
let muted: boolean = true;
muted = false;

//number
let age: number = 5;
age = 3;


//arrays
let people: string[] = [];
people  = ['Isabel', 'Nicol', 'Raul']

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers = ['Isabel', 123, 'Andres'];


//enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`)
