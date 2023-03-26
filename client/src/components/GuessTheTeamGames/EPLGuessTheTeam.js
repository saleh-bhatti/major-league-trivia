import React, { useState } from "react";
import EPLTeams from "../TeamLists/EPLTeams";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

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
  },
  guesses: {
    marginTop: "10px",
    marginBottom: "10px",
  },
});

const EPLTeamDropdown = ({ handleEPLTeamSelection, selectedTeam, gameOver, classes }) => {
  return (
    <FormControl fullWidth className={classes.select}>
      <InputLabel id="epl-team-dropdown-label">
        Select an EPL team:
        </InputLabel>
      <Select
        labelId="epl-team-dropdown-label"
        id="epl-team-dropdown"
        value={selectedTeam}
        onChange={handleEPLTeamSelection}
        disabled={gameOver}
      >
         <MenuItem value="">
          <em>--Select an EPL team--</em>
        </MenuItem>
        {EPLTeams.map((team) => (
          <MenuItem key={team} value={team}>
            {" "}
            {team}{" "}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const EPLGuessTheTeam = ({ correctAnswer }) => {
  const numOfTries = 5;
  const [selectedTeam, setSelectedTeam] = useState("");
  const [displayGuesses, setDisplayGuesses] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(numOfTries);
  const [gameOver, setGameOver] = useState(false);
  const [numOfTriesUsed, setNumOfTriesUsed] = useState(0);
  const classes = useStyles();

  const handleEPLTeamSelection = (e) => {
    setSelectedTeam(e.target.value);
  };

  const handleGuess = () => {
    setDisplayGuesses([...displayGuesses, selectedTeam]);
    setSelectedTeam("");
    setRemainingGuesses(remainingGuesses - 1);
    setNumOfTriesUsed(numOfTries - remainingGuesses + 1);

    if (selectedTeam === correctAnswer) {
      setGameOver(true);
    }
  };

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
      <Typography variant="h4" component="h1" gutterBottom>
          Guess the EPL Team
        </Typography>
        <EPLTeamDropdown
          handleEPLTeamSelection={handleEPLTeamSelection}
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
          disabled={remainingGuesses === 0 || gameOver}
          className={classes.button}
        >
          Guess!
        </Button>
        <div className={classes.guesses}>
          {displayGuesses.map((guess, index) => (
            <div key={index}>{guess}</div>
          ))}
        </div>
        {remainingGuesses === 0 && <div>Out of guesses!</div>}
        {gameOver && (
          <div>
            <Typography>
              You guessed correctly in {numOfTriesUsed} tries!
            </Typography>
          </div>
        )}
        {!gameOver && remainingGuesses > 0 && (
          <div>{`Remaining guesses: ${remainingGuesses}`}</div>
        )}
      </CardContent>
    </Card>
  );
};

export default EPLGuessTheTeam;
