import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Router, Switch, Route } from "react-router-dom";
import history from '../Navigation/history';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


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

const numOfTries = 5;

function GuessComponent( {correctAnswer} ) {
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
          <Typography>You guessed correctly in {numOfTries - remainingGuesses} tries!</Typography>
        </div>
      )}
      {!gameOver && remainingGuesses > 0 && (
        <div>{`Remaining guesses: ${remainingGuesses}`}</div>
      )}
    </div>
  );
}


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: 1,
            mode: 0
        }
    };
    correctanswermessage() {
        alert('Correct Answer');
      }
      incorrectanswermessage() {
        alert('Incorrect Answer');
      }

    render() {
        const { classes } = this.props;
 const Overundergame = () => {
            const [selectedstatquestion, setselectedstatquestion] = React.useState('');
            const [selectedoverbutton, setselectedoverbutton] = React.useState('');
            const [selectedunderbutton, setselectedunderbutton] = React.useState('');
        
            const [correctanswer, setcorrectanswer] = React.useState('');
            const [incorrectanswer, setincorrectanswer] = React.useState('');
        
            const overbuttonclick = (event) => {
              console.log(event.target.value)
              setselectedoverbutton(event.target.value);
            }
            const statquestionchange = (event) => {
              console.log(event.target.value)
              setselectedstatquestion(event.target.value);
            }
            const underbuttonclick = (event) => {
              console.log(event.target.value)
              setselectedunderbutton(event.target.value);
            }
        
        
        
            const result = (event) => {
        
              console.log(selectedoverbutton)
              console.log(selectedunderbutton)
        
              if (selectedstatquestion == "Did Lebron James average 30pts a game in the NBA in 2022?") {
        
              alert("Correct Answer")
              }
        
              
          }
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
        
                <Questionselection onChange={statquestionchange} />
                <Overbutton onChange={overbuttonclick} />
                <Underbutton onChange={underbuttonclick} />
        
              </Grid>
            )
          }
        
          const Questionselection = (props) => {
            return (
              <Grid item>
                <InputLabel> Select a sports statistics question</InputLabel>
                <Select onChange={props.onChange} value={props.title}>
                <MenuItem value={"Does Harry Kane have more than 20 goals in the 2022 English Premier League Season?"}>Does Harry Kane have more than 20 goals in the 2022 English Premier League Season?</MenuItem>
                </Select>
              </Grid>
            )
          }
        
          const Overbutton = (props) => {
            return (
              <Grid item>
              <Button variant="contained" color="primary" onClick={this.correctanswermessage}>
                Over
              </Button>
            </Grid>
            )
          }
        
          const Underbutton = (props) => {
            return (
              <Grid item>
              <Button variant="contained" color="primary" onClick={this.incorrectanswermessage}>
                Under
              </Button>
            </Grid>
            )
          }
        


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
                        <AppBar position="static">
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
                    </div>

                    <div>
                    <Typography variant="h1">Guess The Player</Typography>
                    <Box mt={2}>
                    <Typography variant="body1">Who is the top scorer in the 2022-23 Premier League season?</Typography>
                    </Box>
                    </div>
                    <div>
                    <Box mt={2}>
                    <GuessComponent correctAnswer={"Erling Haaland"}/>
                    </Box>
                    </div>

                    <div>
                    <Typography variant="h1">Guess The Team</Typography>
                    <Box mt={2}>
                    <Typography variant="body1">Who is the current Premier League champion?</Typography>
                    </Box>
                    </div>
                    <div>
                    <Box mt={2}>
                    <GuessComponent correctAnswer={"Manchester City"}/>
                    </Box>
                    </div>
                    <div>
                        <Overundergame/>
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