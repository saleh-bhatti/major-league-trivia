let mysql = require("mysql");
let config = require("./config.js");
const fetch = require("node-fetch");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { response } = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));

app.post("/api/getNBAPlayerData", (req, res) => {
  let connection = mysql.createConnection(config);

  let sql = `
  SELECT Player, Pos, Tm, TRB, AST, PTS
  FROM players
  ORDER BY RAND();
`;

  connection.query(sql, (error, results, fields) => {
    if (error) throw error;
    const questions = results.map((row) => {
      const { Player, Position, Team, Rebounds, Assists, Points } = row;
      const question = `In the 2021-22 season, this player played ${Position} for ${Team}, and averaged ${Points} points, ${Rebounds} rebounds, and ${Assists} assists.`;
      const answer = Player;
      return { question, answer };
    });
    console.log(questions);
  });

  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  res.json({ questions });

  connection.end();
});

app.post("/api/loadUserSettings", (req, res) => {
  let connection = mysql.createConnection(config);
  let userID = req.body.userID;

  let sql = `SELECT mode FROM user WHERE userID = ?`;
  console.log(sql);
  let data = [userID];
  console.log(data);

  connection.query(sql, data, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }

    let string = JSON.stringify(results);
    //let obj = JSON.parse(string);
    res.send({ express: string });
  });
  connection.end();
});

app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server
