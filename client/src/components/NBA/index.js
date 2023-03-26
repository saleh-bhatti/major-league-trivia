import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Router, Switch, Route } from "react-router-dom";
import history from "../Navigation/history";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import NBAGuessTheTeam from "../GuessTheTeamGames/NBAGuessTheTeam";
import NBAGuessThePlayer from "../GuessThePlayerGames/NBAGuessThePlayer";
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
    type: "light",
    background: {
      default: "#e33371",
    },
    primary: {
      main: "#e33371",
    },
    secondary: {
      main: "#e33371",
    },
  },
});

const styles = (theme) => ({
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
    [theme.breakpoints.down("xs")]: {
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
          onClick={() => history.push("/Home")}
        >
          <Button color="inherit">Home</Button>
        </Link>
        <Link
          color="inherit"
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/NFL")}
        >
          <Button color="inherit">NFL</Button>
        </Link>
        <Link
          color="inherit"
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/NBA")}
        >
          <Button color="inherit">NBA</Button>
        </Link>
        <Link
          color="inherit"
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/EPL")}
        >
          <Button color="inherit">Premier League</Button>
        </Link>
        <Link
          color="inherit"
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/Profile")}
        >
          <Button color="inherit">Profile</Button>
        </Link>

        <Button color="inherit">Log out</Button>
      </Toolbar>
    </AppBar>
  );
}

const Overundergame = () => {
  const [selectedButton, setSelectedButton] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [gameOver, setGameOver] = React.useState(false);

  const [questions, setQuestions] = React.useState([
    {
      question: "Did Lebron James average 30pts a game in the NBA in 2021-22?",
      correctAnswer: "Over",
    },
    {
      question: "Did Stephen Curry average 25pts a game in the NBA in 2021-22?",
      correctAnswer: "Over",
    },
    {
      question: "Did Joel Embiid average 31pts a game in the NBA in 2021-22?",
      correctAnswer: "Under",
    },
    {
      question: "Did Trae Young average 28pts a game in the NBA in 2021-22?",
      correctAnswer: "Over",
    },
    {
      question: "Did Demar DeRozan average 20pts a game in the NBA in 2021-22?",
      correctAnswer: "Over",
    },
    {
      question: "Did Miles Bridges average 22pts a game in the NBA in 2021-22?",
      correctAnswer: "Under",
    },
    {
      question:
        "Did Andrew Wiggins average 20pts a game in the NBA in 2021-22?",
      correctAnswer: "Under",
    },
    {
      question: "Did Desmond Bane average 18pts a game in the NBA in 2021-22?",
      correctAnswer: "Over",
    },
    {
      question: "Did RJ Barrett average 21pts a game in the NBA in 2021-22?",
      correctAnswer: "Under",
    },
    {
      question: "Did Kyle Kuzma average 15pts a game in the NBA in 2021-22?",
      correctAnswer: "Over",
    },
    {
      question: "Did Caris LeVert average 15 pts a game in the NBA in 2021-22?",
      correctAnswer: "Over",
    },
    {
      question:
        "Did Reggie Jackson average 25pts a game in the NBA in 2021-22?",
      correctAnswer: "Under",
    },
    {
      question: "Did Kevin Durant average 25pts a game in the NBA in 2021-22?",
      correctAnswer: "Over",
    },
    {
      question:
        "Did Harrison Barnes average 16 pts a game in the NBA in 2021-22?",
      correctAnswer: "Over",
    },
    {
      question: "Did Evan Mobley average 20pts a game in the NBA in 2021-22?",
      correctAnswer: "Under",
    },
    {
      question: "Did Bobby Portis average 19pts a game in the NBA in 2021-22?",
      correctAnswer: "Under",
    },
    {
      question: "Did Mike Conley average 25pts a game in the NBA in 2021-22?",
      correctAnswer: "Under",
    },
    {
      question: "Did Seth Curry average 20pts a game in the NBA in 2021-22?",
      correctAnswer: "Under",
    },
    {
      question: "Did Rudy Gobert average 25pts a game in the NBA in 2021-22?",
      correctAnswer: "Under",
    },
    {
      question: "Did LaMelo Ball average 15pts a game in the NBA in 2021-22?",
      correctAnswer: "Over",
    },
    {
      question: "Did Devin Booker average 25pts a game in the NBA in 2021-22?",
      correctAnswer: "Over",
    },
    {
      question:
        "Did Donnovan Mitchell average 25pts a game in the NBA in 2021-22?",
      correctAnswer: "Over",
    },
    {
      question: "Did Jalen Brunson average 25pts a game in the NBA in 2021-22?",
      correctAnswer: "Over",
    },
    {
      question: "Did Evan Fournier average 15pts a game in the NBA in 2021-22?",
      correctAnswer: "Under",
    },
    {
      question:
        "Did Draymond Green average 12pts a game in the NBA in 2021-22?",
      correctAnswer: "Under",
    },
    {
      question: "Did Klay Thompson average 20pts a game in the NBA in 2021-22?",
      correctAnswer: "Over",
    },
    {
      question: "Did Jordan Poole average 20pts a game in the NBA in 2021-22?",
      correctAnswer: "Under",
    },
  ]);

  React.useEffect(() => {
    setQuestions(questions.sort(() => Math.random() - 0.5));
  }, []);

  const [currentQuestion, setCurrentQuestion] = React.useState(
    Math.floor(Math.random() * questions.length)
  );
  const [score, setScore] = React.useState(0);

  const handleButtonClick = (event) => {
    const selectedValue = event.currentTarget.value;
    // setSelectedButton(selectedValue);

    if (selectedValue === questions[currentQuestion].correctAnswer) {
      setMessage("Correct!");
      setScore(score + 1);
    } else {
      setMessage("Incorrect :(");
    }
    setGameOver(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedButton("");
        setMessage("");
        setGameOver(false);
      }
    }, 1000);
  };

  return (
    <Grid
      container
      spacing={6}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Typography variant="h1">Over and Under Sports Game!</Typography>
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
      <Grid item>
        <Typography variant="h4">Score: {score}</Typography>
      </Grid>

      {gameOver && (
        <Grid item>
          <Typography variant="h4">{message}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 1,
      mode: 0,
    };
  }

  render() {
    const { classes } = this.props;

    const mainMessage = (
      <Grid
        container
        spacing={0}
        direction="column"
        justify="flex-start"
        style={{ minHeight: "100vh" }}
        className={classes.mainMessageContainer}
      >
        <Grid item>
          <div className={classes.root}>
            <NavBar history={this.props.history} />
          </div>

          <div>
            <Box mt={1} textAlign="left">
              <NBAGuessThePlayer correctAnswer={"LeBron James"} />
            </Box>
          </div>

          <div>
            <Box mt={8} textAlign="left">
              <NBAGuessTheTeam correctAnswer={"Toronto Raptors"} />
            </Box>
          </div>

          <div>
            <Overundergame />
          </div>
        </Grid>
      </Grid>
    );

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <Paper className={classes.paper}>{mainMessage}</Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
