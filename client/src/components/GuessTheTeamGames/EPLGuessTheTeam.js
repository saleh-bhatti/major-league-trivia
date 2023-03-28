import React, { useState, useRef } from "react";
import EPLTeams from "../TeamLists/EPLTeams";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import EPLTeamQuestions from "../GuessTheTeamQuestions/EPLTeamQuestions";
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

const ImageContainer = ({ src }) => {
  return (
    <div style={{ width: "800px", height: "300px", overflow: "hidden" }}>
      <img
        src={src}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

const EPLTeamDropdown = ({
  selectedTeam,
  setSelectedTeam,
  gameOver,
  classes,
  handleGuess,
}) => {
  const inputRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && EPLTeams.includes(selectedTeam)) {
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
        id="epl-team-dropdown"
        options={EPLTeams}
        value={selectedTeam}
        onChange={(event, value) => setSelectedTeam(value)}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select an EPL team"
            variant="outlined"
            onKeyDown={handleKeyDown}
            inputRef={inputRef}
          />
        )}
      />
    </FormControl>
  );
};

const EPLGuessTheTeam = () => {
  const numOfTries = 5;
  const timerValue = 120;
  const [selectedTeam, setSelectedTeam] = useState("");
  const [displayGuesses, setDisplayGuesses] = useState([]);
  const [displayAnswers, setDisplayAnswers] = useState([]);
  const [gameOverMessage, setGameOverMessage] = useState("");
  const [highScoreMessage, setHighScoreMessage] = useState("");
  const [remainingLives, setRemainingLives] = useState(numOfTries);
  const [gameOver, setGameOver] = useState(false);
  const [newHighScore, setNewHighScore] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timerValue);
  const [gameStarted, setGameStarted] = useState(false);
  const classes = useStyles();
  const currentQuestion = EPLTeamQuestions[currentQuestionIndex];
  const correctAnswer = currentQuestion.answer;

  const handlePlayAgain = () => {
    setSelectedTeam("");
    setDisplayGuesses([]);
    setDisplayAnswers([]);
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

  const handleGuess = () => {
    setTimeLeft(timerValue);
    if (score > 1) {
      setTimeLeft((timerValue * 3) / 4);
    }
    if (score > 3) {
      setTimeLeft((timerValue * 2) / 3);
    }
    if (score >= 8) {
      setTimeLeft((timerValue * 1) / 2);
    }
    if (selectedTeam === correctAnswer) {
      setDisplayAnswers([
        ...displayAnswers,
        `Correct! The answer was ${correctAnswer}.`,
      ]);
      setScore(score + 1);
      setCurrentQuestionIndex(currentQuestionIndex + 1);

      handleNextQuestion();
    } else {
      const hint = `Hint: The team's first letter begins with "${correctAnswer.charAt(
        0
      )}".`;
      setDisplayGuesses([
        ...displayGuesses,
        `Incorrect! The answer is not ${selectedTeam}. ${hint}`,
      ]);
      setRemainingLives(remainingLives - 1);
    }
    setSelectedTeam("");
  };

  const handleNextQuestion = () => {
    setDisplayGuesses([]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
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
      setDisplayGuesses([]);
      setGameOver(true);
    }
  }, [remainingLives, timeLeft]);

  return (
    <Card variant="outlined" className={classes.card}>
      {gameStarted ? (
        <CardContent>
          <Typography variant="h4" component="h1" className={classes.heading}>
            Guess the EPL Team
          </Typography>
          <Typography variant="h6" component="h2" align="center" gutterBottom>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ImageContainer src={currentQuestion.question} />
            </div>
          </Typography>
          <div className={classes.guessSection}>
            <EPLTeamDropdown
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
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
              disabled={!selectedTeam || gameOver}
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
            Welcome to "Who's That Team?"
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

export default EPLGuessTheTeam;
