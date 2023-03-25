import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import Link from '@material-ui/core/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import TextField from "@material-ui/core/TextField";
import NBAGuessTheTeam from '../GuessTheTeamGames/NBAGuessTheTeam';


//Dev mode
const serverURL = ""; //enable for dev mode

//Deployment mode instructions
//const serverURL = "http://ov-research-4.uwaterloo.ca:PORT"; //enable for deployed mode; Change PORT to the port number given to you;
//To find your port number: 
//ssh to ov-research-4.uwaterloo.ca and run the following command: 
//env | grep "PORT"
//copy the number only and paste it in the serverURL in place of PORT, e.g.: const serverURL = "http://ov-research-4.uwaterloo.ca:3000";

const fetch = require("node-fetch");

const opacityValue = 0.9;

const theme = createTheme({
  palette: {
    type: 'light',
    background: {
      default: "#e33371"
    },
    primary: {
      main: "#e33371",
    },
    secondary: {
      main: "#e33371",
    },
  },
});

const styles = theme => ({
  root: {
    body: {
      backgroundColor: "#000000",
      opacity: opacityValue,
      overflow: "hidden",
    },
  },
  mainMessage: {
    opacity: opacityValue,
  },

  mainMessageContainer: {
    marginTop: "20vh",
    marginLeft: theme.spacing(20),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(4),
    },
  },
  paper: {
    overflow: "hidden",
  },
  message: {
    opacity: opacityValue,
    maxWidth: 250,
    paddingBottom: theme.spacing(2),
  },

});

function NavBar(props) {
  const { history } = props;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link
          color="inherit"
          style={{ cursor: "pointer" }}
          onClick={() => history.push('/Home')}
        >
          <Button color="inherit">Home</Button>
        </Link>
        <Link
          color="inherit"
          style={{ cursor: "pointer" }}
          onClick={() => history.push('/NFL')}
        >
          <Button color="inherit">NFL</Button>
        </Link>
        <Link
          color="inherit"
          style={{ cursor: "pointer" }}
          onClick={() => history.push('/NBA')}
        >
          <Button color="inherit">NBA</Button>
        </Link>
        <Link
          color="inherit"
          style={{ cursor: "pointer" }}
          onClick={() => history.push('/EPL')}
        >
          <Button color="inherit">Premier League</Button>
        </Link>
        <Link
          color="inherit"
          style={{ cursor: "pointer" }}
          onClick={() => history.push('/Profile')}
        >
          <Button color="inherit">Profile</Button>
        </Link>

        <Button color="inherit">Log out</Button>
      </Toolbar>
    </AppBar>
  );
}

const numOfTries = 5;

function GuessComponent({ correctAnswer }) {
  const [inputValue, setInputValue] = useState("");
  const [displayValues, setDisplayValues] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(numOfTries);
  const [gameOver, setGameOver] = useState(false);
  const [numOfTriesUsed, setNumOfTriesUsed] = useState(0);

  const handleSubmit = () => {
    setDisplayValues([...displayValues, inputValue]);
    setInputValue("");
    setRemainingGuesses(remainingGuesses - 1);
    setNumOfTriesUsed(numOfTries - remainingGuesses + 1);
    if (inputValue === correctAnswer) {
      setGameOver(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <TextField
        id="guess-input"
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
        disabled={remainingGuesses === 0 || gameOver}
      />
      <div>
        {displayValues.map((guess, index) => (
          <div key={index}>{guess}</div>
        ))}
      </div>
      {remainingGuesses === 0 && <div>Out of guesses!</div>}
      {gameOver && (
        <div>
          <Typography>You guessed correctly in {numOfTriesUsed} tries!</Typography>
        </div>
      )}
      {!gameOver && remainingGuesses > 0 && (
        <div>{`Remaining guesses: ${remainingGuesses}`}</div>
      )}
    </div>
  );
}

const Overundergame = () => {
  const [selectedButton, setSelectedButton] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [gameOver, setGameOver] = React.useState(false);

  const [questions, setQuestions] = React.useState([
    { question: "Did Lebron James average 30pts a game in the NBA in 2021-22?", correctAnswer: "Over" },
    { question: "Did Stephen Curry average 25pts a game in the NBA in 2021-22?", correctAnswer: "Over" },
    { question: "Did Chris Paul average 20pts a game in the NBA in 2021-22?", correctAnswer: "Under" },
  ]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0)

  const handleButtonClick = (event) => {
    const selectedValue = event.currentTarget.value;
    setSelectedButton(selectedValue);

    if (selectedValue === questions[currentQuestion].correctAnswer) {
      setMessage("Correct!");
    } else {
      setMessage("Incorrect :(");
    }
    setGameOver(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedButton('');
        setMessage('');
        setGameOver(false);
      }
    }, 2000);
  };



  return (
    <Grid
      container
      spacing={6}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        <Typography variant="h1">
          Over and Under Sports Game!
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body1">
          {questions[currentQuestion].question}
        </Typography>
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          color="primary"
          value="Over"
          onClick={handleButtonClick}
          disabled={gameOver}
        >
          Over
        </Button>
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          color="primary"
          value="Under"
          onClick={handleButtonClick}
          disabled={gameOver}
        >
          Under
        </Button>
      </Grid>

      {gameOver && (
        <Grid item>
          <Typography variant="h4">
            {message}
          </Typography>
        </Grid>
      )}
    </Grid>
  )
};






class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userID: 1,
      mode: 0,
    }
  };

  render() {
    const { classes } = this.props;

    const mainMessage = (
      <Grid
        container
        spacing={0}
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        style={{ minHeight: '100vh' }}
        className={classes.mainMessageContainer}
      >

        <Grid item>
          <div className={classes.root}>
            <NavBar history={this.props.history} />
          </div>

          <div>
            <Typography variant="h1">Guess The Player</Typography>
            <Box mt={2}>
              <Typography variant="body1">Who is the Golden State Warriors leading scorer this season?</Typography>
            </Box>
          </div>
          <div>
            <Box mt={2}>
              <GuessComponent correctAnswer={"Stephen Curry"} />
            </Box>
          </div>

          <div>
            <Typography variant="h1" align="center">Guess The Team</Typography>

          </div>
          <div>
            <Box mt={2} align="center">
              <NBAGuessTheTeam correctAnswer={"Toronto Raptors"} />
            </Box>

          </div>

          <div>
            <Overundergame />
          </div>

        </Grid>
      </Grid>
    )

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <Paper
            className={classes.paper}
          >
            {mainMessage}
          </Paper>

        </div>
      </MuiThemeProvider>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);