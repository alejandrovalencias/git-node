const axios = require("axios");
let urlApi = `https://jsonplaceholder.typicode.com/posts`;

const getUsuariosThen = () => {
  axios
    .get(urlApi)
    .then(function ({ data }) {
      // handle success
      console.log(data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

const getUsuarios = async () => {
  try {
    const { data, status } = await axios.get(urlApi);
    console.log(status);
  } catch (e) {
    console.log(e);
  }
  //   console.log(data);
};

getUsuarios();
