import React, { useState } from "react";
import NBATeams from "../TeamLists/NBATeams";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import NBATeamQuestions from "../GuessTheTeamQuestions/NBATeamQuestions";
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

const NBATeamDropdown = ({
  handleNBATeamSelection,
  selectedTeam,
  gameOver,
  classes,
}) => {
  return (
    <FormControl fullWidth className={classes.select}>
      <InputLabel id="nba-team-dropdown-label">
        Select an NBA Team:
      </InputLabel>
      <Select
        labelId="nba-team-dropdown-label"
        id="nba-team-dropdown"
        value={selectedTeam}
        onChange={handleNBATeamSelection}
      >
        <MenuItem value="">
          <em>--Select an NBA Team--</em>
        </MenuItem>
        {NBATeams.map((Team) => (
          <MenuItem key={Team} value={Team}>
            {" "}
            {Team}{" "}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const NBAGuessTheTeam = () => {
  const numOfTries = 5;
  const [selectedTeam, setSelectedTeam] = useState("");
  const [displayGuesses, setDisplayGuesses] = useState([]);
  const [displayAnswers, setDisplayAnswers] = useState([]);
  const [gameOverMessage, setGameOverMessage] = useState("");
  const [remainingLives, setRemainingLives] = useState(numOfTries);
  const [gameOver, setGameOver] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const classes = useStyles();
  const currentQuestion = NBATeamQuestions[currentQuestionIndex];
  const correctAnswer = currentQuestion.answer;

  const handleNBATeamSelection = (e) => {
    setSelectedTeam(e.target.value);
  };

  const handleGuess = () => {
    if (selectedTeam === correctAnswer) {
      setDisplayAnswers([
        ...displayAnswers,
        `Correct! The answer was ${correctAnswer}.`,
      ]);
      setScore(score + 1);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedTeam("");
      handleNextQuestion();
    } else {
      setDisplayGuesses([
        ...displayGuesses,
        `Incorrect! The answer is not ${selectedTeam}.`,
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
      setGameOverMessage(`Out of Lives! The answer was ${correctAnswer}.`);
    }
  }, [remainingLives]);

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom>
          Guess the NBA Team
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          <img align='center' src={currentQuestion.question} />
        </Typography>
        <NBATeamDropdown
          handleNBATeamSelection={handleNBATeamSelection}
          selectedTeam={selectedTeam}
          gameOver={gameOver}
          classes={classes}
        />
        <Button
          onClick={handleGuess}
          value="Guess"
          variant="contained"
          color="primary"
          size="large"
          disabled={!selectedTeam || gameOver}
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
        {!gameOver &&
          <div>{`Lives: ${remainingLives}`}</div>
        }
        <div className={classes.text}>
          <Typography variant="">Score: {score}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default NBAGuessTheTeam;
