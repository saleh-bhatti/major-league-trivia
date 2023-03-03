import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";

function GuessComponent() {
  const [inputValue, setInputValue] = useState("");
  const [displayValues, setDisplayValues] = useState([]);

  const handleSubmit = () => {
    setDisplayValues([...displayValues, inputValue]);
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <TextField
        label="Guess"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
            setInputValue("");
          }
        }}
      />
      <div>
        {displayValues.map((guess, index) => (
          <div key={index}>{guess}</div>
        ))}
      </div>
    </div>
  );
}

const Game = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <GuessComponent />
      
    </div>
  );
};

export default Game;