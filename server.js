const express = require("express");
const server = express();
const port = 8080;
server.use(express.static(__dirname + "/assets"));

//Especificar local do css
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
server.get("/registerHome", (req, res) => {
  res.sendFile(__dirname + "/assets/pages/registerHome.html");
});
server.get("/habtsHome", (req, res) => {
  res.sendFile(__dirname + "/assets/pages/habtsHome.html");
});
server.get("/timerHome", (req, res) => {
  res.sendFile(__dirname + "/assets/pages/timerHome.html");
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta${port}`);
});
