const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  //console.log(req.body.n1);
  const num1 = +req.body.n1;
  const num2 = +req.body.n2;

  const result = num1 + num2;

  res.send(`The result is ${result}`);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  const weight = parseFloat(req.body.w);
  const height = parseFloat(req.body.h);

  const resultBMI = weight / (height * height);

  res.send(`Your BMI is ${resultBMI}`);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
