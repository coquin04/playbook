// Usando el objeto express
const express = require("express");
// App express
const app = express();
// Puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000;
// Path inicial, respondera a la url localhost:3000
app.get("/", (req, res) => {
  res.send("Hello World! Cowboy");
});
// Respondiendo texto
// localhost:3000/launchx
app.get("/launchx", (req, res) => {
  res.send("Welcome to launchX");
});
// Regresando un objeto
// localhost:3000/explorersInNode
app.get("/explorerInNode", (req, res) => {
  const explorer = { name: "Explorer", msg: "Hello" };
  res.send(explorer);
});
// Con esto inicializamos esta app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
