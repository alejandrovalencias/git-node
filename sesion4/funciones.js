const getNombre = (nombre) => {
  console.log(nombre);
//   return nombre;
};

const getApellido = (valor) => {
  console.log(valor);
};

const getCargo = (valor) => {
  try {
    console.log(valor);
  } catch (e) {
    console.log(e);
  }
};

// ((nombre, apellido) => {
//   console.log(nombre, apellido);
// })("Jesus", "de Nazareth");

// getNombre("Maria");

module.exports = { getNombre, getApellido };
