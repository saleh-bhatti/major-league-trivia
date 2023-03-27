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
import NBAPlayerQuestions from "../GuessThePlayerQuestions/NBAPlayerQuestions";
import { useEffect } from "react";

const useStyles = makeStyles({
  card: {
    width: "1000px",
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
  },
  text: {
    marginTop: "10px",
    marginBottom: "10px",
  },
});

const NBAPlayerDropdown = ({
  handleNBAPlayerSelection,
  selectedPlayer,
  gameOver,
  classes,
}) => {
  return (
    <FormControl fullWidth className={classes.select}>
      <InputLabel id="nba-player-dropdown-label">
        Select an NBA player:
      </InputLabel>
      <Select
        labelId="nba-player-dropdown-label"
        id="nba-player-dropdown"
        value={selectedPlayer}
        onChange={handleNBAPlayerSelection}
      >
        <MenuItem value="">
          <em>--Select an NBA player--</em>
        </MenuItem>
        {NBAPlayers.map((player) => (
          <MenuItem key={player} value={player}>
            {" "}
            {player}{" "}
          </MenuItem>
        ))}
      </Select>
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const classes = useStyles();
  const currentQuestion = NBAPlayerQuestions[currentQuestionIndex];
  const correctAnswer = currentQuestion.answer;

  const handleNBAPlayerSelection = (e) => {
    setSelectedPlayer(e.target.value);
  };

  const handleGuess = () => {
    if (selectedPlayer === correctAnswer) {
      setDisplayAnswers([
        ...displayAnswers,
        `Correct! The answer was ${correctAnswer}.`,
      ]);
      setScore(score + 1);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedPlayer("");
      handleNextQuestion();
    } else {
      setDisplayGuesses([
        ...displayGuesses,
        `Incorrect! The answer is not ${selectedPlayer}.`,
      ]);
      setRemainingLives(remainingLives - 1);
    }
  };

  const handleNextQuestion = () => {
    setDisplayGuesses([]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    if (remainingLives === 0) {
      setDisplayGuesses([]);
      setGameOver(true);
      setGameOverMessage(`Out of Lives! The answer was ${correctAnswer}. Your final score is ${score}`);
    }
  }, [remainingLives]);

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom>
          Guess the NBA Player
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {currentQuestion.question}
        </Typography>
        <NBAPlayerDropdown
          handleNBAPlayerSelection={handleNBAPlayerSelection}
          selectedPlayer={selectedPlayer}
          gameOver={gameOver}
          classes={classes}
        />
        <Button
          onClick={handleGuess}
          value="Guess"
          variant="contained"
          color="primary"
          size="large"
          disabled={!selectedPlayer || gameOver}
          className={classes.button}
        >
          Guess!
        </Button>
        <div className={classes.text}>
          {displayGuesses.map((guess, index) => (
            <div key={index}>{guess}</div>
          ))}
        </div>
        <div className={classes.text}>
          {displayAnswers.map((answer, index) => (
            <div key={index}>{answer}</div>
          ))}
        </div>
        <div className={classes.text}>
          {gameOverMessage}
        </div>
        {!gameOver && <div>{`Lives: ${remainingLives}`}</div>}
        <div className={classes.text}>
          {!gameOver && <div>{`Score: ${score}`}</div>}
        </div>
      </CardContent>
    </Card>
  );
};

export default NBAGuessThePlayer;
