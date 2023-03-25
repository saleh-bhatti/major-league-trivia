import React, { useState } from "react";
import NBATeams from "../TeamLists/NBATeams";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";





const NBATeamDropdown = ({ handleNBATeamSelection, gameOver }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="nba-team-dropdown-label">Select an NBA team:</InputLabel>
      <Select
        labelId="nba-team-dropdown-label"
        id="nba-team-dropdown"
        value=""
        onChange={handleNBATeamSelection}
        disabled={gameOver}
      >
        <option value="">--Select an NBA team--</option>
        {NBATeams.map((team) => (<MenuItem key={team} value={team}> {team} </MenuItem>
        ))}

      </Select>
    </FormControl>
  );
};

const NBAGuessTheTeam = ({ correctAnswer }) => {
  const numOfTries = 5;
  const [selectedTeam, setSelectedTeam] = useState("");
  const [displayGuesses, setDisplayGuesses] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(numOfTries);
  const [gameOver, setGameOver] = useState(false);
  const [numOfTriesUsed, setNumOfTriesUsed] = useState(0);

  const handleNBATeamSelection = (e) => {
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
    <Card variant="outlined">
      <CardContent>
        <NBATeamDropdown
          handleNBATeamSelection={handleNBATeamSelection}
          gameOver={gameOver}
        />
        <Button
          onClick={handleGuess}
          value="Guess"
          variant="contained"
          color="primary"
          size="large"
          disabled={remainingGuesses === 0 || gameOver}
        >
          Guess!
        </Button>
        <div>
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

export default NBAGuessTheTeam;
