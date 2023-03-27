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
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Router, Switch, Route } from "react-router-dom";
import history from '../Navigation/history';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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
        <Typography variant="h5">
          VASA SPORTS
        </Typography>

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

const NBAteams = [
  "Atlanta Hawks",
  'Boston Celtics',
  "Brooklyn Nets",
  "Charlotte Hornets",
  "Chicago Bulls",
  "Cleveland Cavaliers",
  "Dallas Mavericks",
  "Denver Nuggets",
  "Detroit Pistons",
  "Golden State Warriors",
  "Houston Rockets",
  "Indiana Pacers",
  "Los Angeles Clippers",
  "Los Angeles Lakers",
  "Memphis Grizzlies",
  "Miami Heat",
  "Milwaukee Bucks",
  "Minnesota Timberwolves",
  "New Orleans Pelicans",
  "New York Knicks",
  "Oklahoma City Thunder",
  "Orlando Magic",
  "Philadelphia 76ers",
  "Phoenix Suns",
  "Portland Trail Blazers",
  "Sacramento Kings",
  "San Antonio Spurs",
  "Toronto Raptors",
  "Utah Jazz",
  "Washington Wizards",
];
const NFLteams = [
  "Arizona Cardinals",
  "Atlanta Falcons",
  "Baltimore Ravens",
  "Buffalo Bills",
  "Carolina Panthers",
  "Chicago Bears",
  "Cincinnati Bengals",
  "Cleveland Browns",
  "Dallas Cowboys",
  "Denver Broncos",
  "Detroit Lions",
  "Green Bay Packers",
  "Houston Texans",
  "Indianapolis Colts",
  "Jacksonville Jaguars",
  "Kansas City Chiefs",
  "Las Vegas Raiders",
  "Los Angeles Chargers",
  "Los Angeles Rams",
  "Miami Dolphins",
  "Minnesota Vikings",
  "New England Patriots",
  "New Orleans Saints",
  "New York Giants",
  "New York Jets",
  "Philadelphia Eagles",
  "Pittsburgh Steelers",
  "San Francisco 49ers",
  "Seattle Seahawks",
  "Tampa Bay Buccaneers",
  "Tennessee Titans",
  "Washington Commanders",
]

const EPLteams = [
  "Arsenal",
  "Aston Villa FC",
  "Bournemouth AFC",
  "Brentford",
  "Brighton & Hove Albion",
  "Chelsea",
  "Crystal Palace",
  "Everton FC",
  "Fulham",
  "Leicester City FC",
  "Leeds United",
  "Liverpool FC",
  "Manchester City FC",
  "Manchester United FC",
  "Newcastle United",
  "Nottingham Forest",
  "Southampton FC",
  "Tottenham Hotspur FC",
  "West Ham United",
  "Wolverhampton Wanderers",
]

const NBAteamSelection = () => {
  const [NBAteamslist, setNBAteamslist] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleNBAteamSelection = (event) => {
    setNBAteamslist(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedTeam(NBAteamslist);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
        <InputLabel shrink htmlFor="NBAteamselectionlabel">
          Team
        </InputLabel>
        <Select
          labelId="NBAteamselectionlabel"
          id="NBATeamSelectionForm"
          value={NBAteamslist}
          onChange={handleNBAteamSelection}
        >
          {NBAteams.map((NBAteam) => (
            <MenuItem key={NBAteam} value={NBAteam}>
              {NBAteam}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      {selectedTeam && <p>You selected: {selectedTeam}</p>}
    </div>
  );
};

const NFLteamSelection = () => {
  const [NFLteamslist, setNFLteamslist] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleNFLteamSelection = (event) => {
    setNFLteamslist(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedTeam(NFLteamslist);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
        <InputLabel shrink htmlFor="NFLteamselectionlabel">
          Team
        </InputLabel>
        <Select
          labelId="NFLteamselectionlabel"
          id="NFLTeamSelectionForm"
          value={NFLteamslist}
          onChange={handleNFLteamSelection}
        >
          {NFLteams.map((NFLteam) => (
            <MenuItem key={NFLteam} value={NFLteam}>
              {NFLteam}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      {selectedTeam && <p>You selected: {selectedTeam}</p>}
    </div>
  );
};

const EPLteamSelection = () => {
  const [EPLteamslist, setEPLteamslist] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleEPLteamSelection = (event) => {
    setEPLteamslist(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedTeam(EPLteamslist);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
        <InputLabel shrink htmlFor="EPLteamselectionlabel">
          Team
        </InputLabel>
        <Select
          labelId="EPLteamselectionlabel"
          id="EPLTeamSelectionForm"
          value={EPLteamslist}
          onChange={handleEPLteamSelection}
        >
          {EPLteams.map((EPLteam) => (
            <MenuItem key={EPLteam} value={EPLteam}>
              {EPLteam}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      {selectedTeam && <p>You selected: {selectedTeam}</p>}
    </div>
  );
};


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 1,
      mode: 0
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
          <Typography
            variant={"h4"}
            className={classes.mainMessage}
            align="flex-start"
          >
            Pick your favorite NBA team
          </Typography>

        </Grid>
        <div>
          < NBAteamSelection />
        </div>
        <Grid>
          <Typography
            variant={"h4"}
            className={classes.mainMessage}
            align="flex-start"
          >
            Pick your favorite NFL team
          </Typography>
          < NFLteamSelection />
          <Grid>
            <Typography
              variant={"h4"}
              className={classes.mainMessage}
              align="flex-start"
            >
              Pick your favorite EPL team
            </Typography>
            < EPLteamSelection />
          </Grid>

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