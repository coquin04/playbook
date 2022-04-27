// Usando el objeto express
const express = require("express");
// App express
const app = express();
// Puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000;
// Path inicial, respondera a la url localhost:3000
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// Con esto inicializamos esta app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
