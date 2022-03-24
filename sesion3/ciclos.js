let nombres = ["Juan", "Pedro", "Maria"];
let materia = new Array("Sociales", "Etica", "Religion");
let ciudades = "Medellin, Bogota".split(", ");

const estudiantes = [
  {
    nombre: "Rosmira",
    carrera: "Matematico",
    semestre: 2,
    sexo: "F",
    materias: [{ nombre: "mate 1", nota: 1 }],
  },
  {
    nombre: "Patricia",
    carrera: "Matematico",
    semestre: 13,
    sexo: "F",
    materias: [{ nombre: "mate 2", nota: 2 }],
  },
  {
    nombre: "Guille",
    carrera: "Derecho",
    semestre: 5,
    sexo: "M",
    materias: [{ nombre: "mate 3", nota: 3 }],
  },
  {
    nombre: "Leon",
    carrera: "Artes",
    semestre: 7,
    sexo: "M",
    materias: [
      { nombre: "mate 4", nota: 4 },
      { nombre: "Sociales y ya", nota: 4 },
    ],
  },
];

// 1. filter
// 2. map

// const respuesta = estudiantes
//   .filter(
//     (c) => c.semestre >= 5 && c.materias.filter((m) => m.nota > 2).length > 0
//   )
//   .map((c) => {
//     return {
//       nombre: c.nombre,
//       materia: c.materias.map((k) => k.nombre).join(", "),
//     };
//   });

// console.log(respuesta);

// in, of , normalito
// for
// while
// do while

let n = 0;
// while (n < 3) {
//   console.log(n);
//   n = 200;
// }
let i = 0, resultado = 0;
do {
  i++;
  resultado += i;
} while (i < 5);

console.log(resultado);





