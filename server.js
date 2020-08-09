var express = require("express"); // Express web server framework
var request = require("request"); // "Request" library
var cors = require("cors");
var fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8888;

var words = fs.readFileSync("words/usa.txt", "utf8").split("\n");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
var app = express();

app
  .use(express.static(__dirname + "\\../public"))
  .use(cors())
  .use(express.json());

app.post("/api/", async function (req, res) {
  var phrase = "";
  var number_of_words = getRandomInt(1, 7);

  for (let i = 0; i < number_of_words; i++) {
    phrase += " " + words[getRandomInt(0, words.length)];
  }

  res.send({ phrase: phrase });
});

console.log("Listening on", PORT);
app.listen(PORT);
