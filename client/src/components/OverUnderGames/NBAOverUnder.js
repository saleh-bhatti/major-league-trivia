import React, { useState } from "react";
import NBAPlayers from "../PlayerLists/NBAPlayers";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import NBAOverUnderQuestions from "../OverUnderQuestions/NBAOverUnderQuestions";
import { useEffect } from "react";

const useStyles = makeStyles({
  card: {
    width: "600px",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
    padding: "10px",
    backgroundColor: "#f5f5f5",
  },
  select: {
    marginBottom: "10px",
  },
  button: {
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "10px",
    marginLeft: "10px",
  },
  text: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  validation: {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
});

const NBAOverUnder = () => {
  const numOfTries = 3;
  const [selectedButton, setSelectedButton] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");
  const [gameOverMessage, setGameOverMessage] = useState("");
  const [remainingLives, setRemainingLives] = useState(numOfTries);
  const [gameOver, setGameOver] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const classes = useStyles();
  const currentQuestion = NBAOverUnderQuestions[currentQuestionIndex];
  const correctAnswer = currentQuestion.answer;

  const handleButtonClick = (event) => {
    const selected = event.currentTarget.value;

    if (selected === correctAnswer) {
      setScore(score + 1);
      setDisplayMessage("Correct!");
    } else {
      setDisplayMessage("Incorrect!");
      setRemainingLives(remainingLives - 1);
    }

    setSelectedButton(selected);
    setTimeout(() => handleNextQuestion(), 1500);
  };

  const handleNextQuestion = () => {
    setDisplayMessage("");
    setSelectedButton("");
    if (currentQuestionIndex < NBAOverUnderQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameOver(true);
      setGameOverMessage(`Game Over! Your final score is ${score}.`);
    }
  };

  useEffect(() => {
    if (remainingLives === 0) {
      setGameOver(true);
      setGameOverMessage(`Out of Lives! Your final score is ${score}.`);
    }
  }, [remainingLives]);

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom>
          Over or Under?
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {currentQuestion.question}
        </Typography>

        <Button
          onClick={handleButtonClick}
          value="Over"
          variant="contained"
          color="primary"
          size="large"
          disabled={gameOver}
          className={classes.button}
        >
          Over
        </Button>
        <Button
          onClick={handleButtonClick}
          value="Under"
          variant="contained"
          color="primary"
          size="large"
          disabled={gameOver}
          className={classes.button}
        >
          Under
        </Button>
        <div className={classes.validation}>{displayMessage}</div>
        <div className={classes.validation}>{gameOverMessage}</div>
        {!gameOver && <div>{`Lives: ${remainingLives}`}</div>}
        <div className={classes.text}>
          {!gameOver && <div>{`Score: ${score}`}</div>}
        </div>
      </CardContent>
    </Card>
  );
};


export default NBAOverUnder;
