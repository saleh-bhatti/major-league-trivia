import React, { useState, useRef } from "react";
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
import NBAPlayerQuestions from "../GuessThePlayerQuestions/NBAPlayerQuestions";
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
    marginTop: "10px",
    marginBottom: "10px",
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
  lastlife: {
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

const NBAPlayerDropdown = ({
  selectedPlayer,
  setSelectedPlayer,
  gameOver,
  classes,
  handleGuess,
}) => {
  const inputRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && NBAPlayers.includes(selectedPlayer)) {
      handleGuess();
    }
  };

  useEffect(() => {
    if (!gameOver) {
      inputRef.current.focus();
    }
  }, [gameOver]);

  return (
    <FormControl fullWidth className={classes.select}>
      <Autocomplete
        id="nba-player-dropdown"
        options={NBAPlayers}
        value={selectedPlayer}
        onChange={(event, value) => setSelectedPlayer(value)}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select an NBA player"
            variant="outlined"
            onKeyDown={handleKeyDown}
            inputRef={inputRef}
          />
        )}
      />
    </FormControl>
  );
};

const NBAGuessThePlayer = () => {
  const numOfTries = 3;
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [displayGuesses, setDisplayGuesses] = useState([]);
  const [displayAnswers, setDisplayAnswers] = useState([]);
  const [gameOverMessage, setGameOverMessage] = useState("");
  const [remainingLives, setRemainingLives] = useState(numOfTries);
  const [gameOver, setGameOver] = useState(false);
  const [newHighScore, setNewHighScore] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);
  const classes = useStyles();
  const currentQuestion = NBAPlayerQuestions[currentQuestionIndex];
  const correctAnswer = currentQuestion.answer;

  const handlePlayAgain = () => {
    setSelectedPlayer("");
    setDisplayGuesses([]);
    setDisplayAnswers([]);
    setGameOverMessage("");
    setRemainingLives(numOfTries);
    setGameOver(false);
    setScore(0);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePlayNow = () => {
    setGameStarted(true);
    setTimeLeft(60);
  };

  const handleGuess = () => {
    setTimeLeft(60);
    if (selectedPlayer === correctAnswer) {
      setDisplayAnswers([
        ...displayAnswers,
        `Correct! The answer was ${correctAnswer}.`,
      ]);
      setScore(score + 1);
      setCurrentQuestionIndex(currentQuestionIndex + 1);

      handleNextQuestion();
    } else {
      const hint = `Hint: The player's first name begins with "${correctAnswer.charAt(
        0
      )}".`;
      setDisplayGuesses([
        ...displayGuesses,
        `Incorrect! The answer is not ${selectedPlayer}. ${hint}`,
      ]);
      setRemainingLives(remainingLives - 1);
    }
    setSelectedPlayer("");
  };

  const handleNextQuestion = () => {
    setDisplayGuesses([]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (remainingLives === 0 || timeLeft === 0) {
      if (score > highScore) {
        setHighScore(score);
        setNewHighScore(true);
        setGameOverMessage(
          `Out of Time! The answer was ${correctAnswer}. You got a new high score of ${score}!`
        );
      } else {
        setGameOverMessage(
          `Out of Time! The answer was ${correctAnswer}. Your final score is ${score}.`
        );
      }
      setDisplayGuesses([]);
      setGameOver(true);
    }
  }, [remainingLives, timeLeft]);

  return (
    <Card variant="outlined" className={classes.card}>
      {gameStarted ? (
        <CardContent>
          <Typography variant="h4" component="h1" className={classes.heading}>
            Guess the NBA Player
          </Typography>
          <Typography variant="h6" component="h2" className={classes.questions}>
            {currentQuestion.question}
          </Typography>
          <div className={classes.guessSection}>
            <NBAPlayerDropdown
              selectedPlayer={selectedPlayer}
              setSelectedPlayer={setSelectedPlayer}
              gameOver={gameOver}
              classes={classes}
              handleGuess={handleGuess}
            />
            <Button
              onClick={handleGuess}
              value="Guess"
              variant="contained"
              color="primary"
              size="large"
              disabled={!selectedPlayer || gameOver}
              className={classes.guessButton}
            >
              Guess!
            </Button>
          </div>
          <div className={classes.text}>
            {displayGuesses.map((guess, index) => (
              <div key={index}>{guess}</div>
            ))}
          </div>

          <div className={classes.answerSection}>
            {displayAnswers.map((answer, index) => (
              <div key={index}>{answer}</div>
            ))}
          </div>

          {gameOver ? (
            <div className={classes.gameOver}>
              {gameOverMessage}
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
            {!gameOver && <div>{`Time Left: ${timeLeft}s`}</div>}
          </div>
          {!gameOver && (
            <div
              className={remainingLives === 1 ? classes.lastlife : classes.text}
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
            Guess the NBA Player
          </Typography>
          <Typography variant="h6" component="h2" className={classes.prompt}>
            Think you're ready?
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

export default NBAGuessThePlayer;
