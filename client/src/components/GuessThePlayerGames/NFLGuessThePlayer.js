import React, { useState } from "react";
import NFLPlayers from "../PlayerLists/NFLPlayers";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import NFLPlayerQuestions from "../GuessThePlayerQuestions/NFLPlayerQuestions";
import { useEffect } from "react";

const useStyles = makeStyles({
  card: {
    width: "800px",
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

const NFLPlayerDropdown = ({
  handleNFLPlayerSelection,
  selectedPlayer,
  gameOver,
  classes,
}) => {
  return (
    <FormControl fullWidth className={classes.select}>
      <InputLabel id="nba-player-dropdown-label">
        Select an NFL player:
      </InputLabel>
      <Select
        labelId="nba-player-dropdown-label"
        id="nba-player-dropdown"
        value={selectedPlayer}
        onChange={handleNFLPlayerSelection}
      >
        <MenuItem value="">
          <em>--Select an NFL player--</em>
        </MenuItem>
        {NFLPlayers.map((player) => (
          <MenuItem key={player} value={player}>
            {" "}
            {player}{" "}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const NFLGuessThePlayer = () => {
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
  const currentQuestion = NFLPlayerQuestions[currentQuestionIndex];
  const correctAnswer = currentQuestion.answer;

  const handleNFLPlayerSelection = (e) => {
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
          Guess the NFL Player
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {currentQuestion.question}
        </Typography>
        <NFLPlayerDropdown
          handleNFLPlayerSelection={handleNFLPlayerSelection}
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

export default NFLGuessThePlayer;
