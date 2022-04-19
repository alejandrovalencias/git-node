const express = require("express");
const cors = require("cors");
const app = express();

let corsOptions = ["http://localhost", "http://localhost:8082"];
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin) return callback(null, true);
//       if (corsOptions.indexOf(origin) === -1) {
//         return callback(
//           new Error(`La politica de CORS para esta url no permite el acceso`),
//           false
//         );
//       }
//       return callback(null, true);
//     },
//     credentials: true,
//   })
// );

app.use(express.json()); 
app.use(express.urlencoded({ extends: true }));

app.get("/", (req, res) => {
  const {id,token} = req.query;
  console.log(token);
  console.log(id);
  res.json({ mensaje: "Bienvenidos a mi primera api con express get" });
});

app.post("/", (req, res) => {
  // const {id,token} = req.query;
  console.log('----------------------------------------------');
  const {id,token} = req.body;
  console.log(req.query);
  console.log(req.body);
  // console.log(token);
  // console.log(id);
  console.log('----------------------------------------------');
  res.json({ mensaje: "Bienvenidos a mi primera api con express post" });
});


const PORT = 8081;

const server = app.listen(PORT, function () {
  let host = server.address().address;
  console.log("SERVIDOR BACKEND EN http://%s:%s", host, PORT);
});
