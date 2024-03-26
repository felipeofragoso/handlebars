// Exemplo Handlebars

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const port = 3000;
const nome = "Alisson";
const sobrenome = "Lima De Souza";
const idade = 25;
const profissao = "professor";
const materias = [
  "css",
  "html",
  "node",
  "java",
  "c++",
  "excel",
  "react",
  "angular",
  "php",
];

// Configuração do handlebars
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//criacao da rota de dados
app.get("/dados", function (req, res) {
  res.render("dados", { nome, sobrenome, idade, profissao, materias });
});

app.listen(port, function (req, res) {
  console.log(`O servidor está rodando no http://localhost: ${port}`);
});
