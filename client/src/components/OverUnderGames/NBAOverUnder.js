import React, { useState, useRef } from "react";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import NBAOverUnderQuestions from "../OverUnderQuestions/NBAOverUnderQuestions";
import { useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  card: {
    width: "1000px",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    fontFamily: "Century Gothic, sans-serif",
  },
  select: {
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "#e6e6e6",
    },
    fontFamily: "Century Gothic, sans-serif",
  },
  guessButton: {
    margin: "10px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#1976d2",
      color: "#fff",
      fontWeight: "bold",
    },
    fontFamily: "Century Gothic, sans-serif",
  },
  playAgainButton: {
    backgroundColor: "#00ff00",
    color: "#fff",
    margin: "15px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#1976d2",
      color: "#fff",
      fontWeight: "bold",
    },
    fontFamily: "Century Gothic, sans-serif",
  },
  text: {
    marginTop: "10px",
    marginBottom: "10px",
    fontWeight: "bold",
    fontFamily: "Century Gothic, sans-serif",
  },
  questions: {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "1.05rem",
    fontWeight: "bold",
    fontFamily: "Century Gothic, sans-serif",
  },
  prompt: {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "1.05rem",
    fontWeight: "bold",
    fontFamily: "Century Gothic, sans-serif",
    textAlign: "center",
  },
  alert: {
    color: "red",
    fontWeight: "bold",
    fontFamily: "Century Gothic, sans-serif",
  },
  gameOver: {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Century Gothic, sans-serif",
  },
  guessSection: {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "5px",
    fontWeight: "bold",
    fontFamily: "Century Gothic, sans-serif",
  },
  answerSection: {
    backgroundColor: "#f9f9f9",
    padding: "10px",
    borderRadius: "5px",
    fontStyle: "italic",
    fontSize: "0.75rem",
    fontWeight: "bold",
    fontFamily: "Century Gothic, sans-serif",
  },
  heading: {
    fontWeight: "bold",
    color: "#1976d2",
    marginBottom: "20px",
    textAlign: "center",
    fontFamily: "Century Gothic, sans-serif",
  },
});

const NBAOverUnder = () => {
  const numOfTries = 3;
  const timerValue = 30;
  const [gameOverMessage, setGameOverMessage] = useState("");
  const [highScoreMessage, setHighScoreMessage] = useState("");
  const [remainingLives, setRemainingLives] = useState(numOfTries);
  const [displayMessage, setDisplayMessage] = useState("");
  const [selectedButton, setSelectedButton] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [newHighScore, setNewHighScore] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timerValue);
  const [gameStarted, setGameStarted] = useState(false);
  const classes = useStyles();
  const currentQuestion = NBAOverUnderQuestions[currentQuestionIndex];
  const correctAnswer = currentQuestion.answer;

  const handlePlayAgain = () => {
    setGameOverMessage("");
    setRemainingLives(numOfTries);
    setGameOver(false);
    setScore(0);
    setNewHighScore(false);
    setTimeLeft(timerValue);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePlayNow = () => {
    setGameStarted(true);
  };

  const handleButtonClick = (event) => {
    const selected = event.currentTarget.value;
    setTimeLeft(timerValue);
    if (score > 1) {
      setTimeLeft((timerValue * 2) / 3);
    }
    if (score > 3) {
      setTimeLeft((timerValue * 1) / 2);
    }
    if (score >= 8) {
      setTimeLeft((timerValue * 1) / 3);
    }
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
    setTimeLeft(timerValue);
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
    let timer = null;
    if (gameStarted) {
      timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [gameStarted]);

  useEffect(() => {
    if (remainingLives === 0 || timeLeft === 0) {
      if (score > highScore) {
        setHighScore(score);
        setNewHighScore(true);
        setHighScoreMessage(
          `Game Over! The answer was ${correctAnswer}. You got a new high score of ${score}!`
        );
      } else {
        setGameOverMessage(
          `Game Over! The answer was ${correctAnswer}. Your final score is ${score}.`
        );
      }
      setGameOver(true);
    }
  }, [remainingLives, timeLeft]);

  return (
    <Card variant="outlined" className={classes.card}>
      {gameStarted ? (
        <CardContent>
          <Typography variant="h4" component="h1" className={classes.heading}>
            Over or Under?
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            align="center"
            className={classes.questions}
          >
            {currentQuestion.question}
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={handleButtonClick}
              value="Over"
              variant="contained"
              color="primary"
              size="large"
              disabled={gameOver}
              className={classes.guessButton}
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
              className={classes.guessButton}
            >
              Under
            </Button>
          </div>
          <div className={classes.text}>{displayMessage}</div>

          {gameOver ? (
            <div className={classes.gameOver}>
              {newHighScore ? highScoreMessage : gameOverMessage}
              <Button
                onClick={handlePlayAgain}
                value="Play Again"
                variant="contained"
                color="green"
                size="large"
                className={classes.playAgainButton}
              >
                Play Again
              </Button>
            </div>
          ) : null}
          <div className={classes.text}>
            {!gameOver && (
              <div
                className={timeLeft < 16 ? classes.alert : classes.text}
              >{`Time Left: ${timeLeft}s`}</div>
            )}
          </div>
          {!gameOver && (
            <div
              className={remainingLives === 1 ? classes.alert : classes.text}
            >
              {`Lives Remaining: ${remainingLives}`}
            </div>
          )}
          <div className={classes.text}>
            {!gameOver && <div>{`Score: ${score}`}</div>}
          </div>
          <div className={classes.text}>
            {!gameOver && <div>{`High Score: ${highScore}`}</div>}
          </div>
        </CardContent>
      ) : (
        <CardContent>
          <Typography variant="h4" component="h1" className={classes.heading}>
            Welcome to "Over or Under?"
          </Typography>
          <Typography variant="h6" component="h2" className={classes.prompt}>
            Think You're Ready?
          </Typography>
          <div style={{ textAlign: "center" }}>
            <Button
              onClick={handlePlayNow}
              value="Play Now"
              variant="contained"
              color="primary"
              size="large"
              className={classes.playNowButton}
            >
              Play Now
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default NBAOverUnder;
