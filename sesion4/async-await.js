async function getLista() {
  let i = 0;
  for (i = 0; i < 10000; i++) {
    console.log(i);
  }
  return i;
}

const getListaSin = async () => {  
  await getLista();
  console.log("Terminar");
  return true;
};

// getListaSin();

// getLista.then( c => {
//     console.log(c);
// })