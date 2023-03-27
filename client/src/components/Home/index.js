import React, { Component } from "react";
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
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Router, Switch, Route } from "react-router-dom";
import history from "../Navigation/history";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

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
      align: 'center',
    },
  },
  mainMessage: {
    opacity: opacityValue,
    align: 'center'
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
    align: 'center'
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
          onClick={() => history.push("/Home")}
        >
          <Button color="inherit"> Home </Button>
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 1,
      mode: 0,
    }
  };

  componentDidMount() {
    this.loadUserSettings();
  }


  componentDidMount() {
    //this.loadUserSettings();
  }

  loadUserSettings() {
    this.callApiLoadUserSettings().then((res) => {
      //console.log("loadUserSettings returned: ", res)
      var parsed = JSON.parse(res.express);
      console.log("loadUserSettings parsed: ", parsed[0].mode);
      this.setState({ mode: parsed[0].mode });
    });
  }

  callApiLoadUserSettings = async () => {
    const url = serverURL + "/api/loadUserSettings";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify({
        userID: this.state.userID,
      }),
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log("User settings: ", body);
    return body;
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
        style={{ minHeight: "100vh" }}
        className={classes.mainMessageContainer}
      >

        <Grid item align="center">

          <div className={classes.root}>
            <NavBar history={this.props.history} />
          </div>


          <Typography variant='h1'>
            Welcome to VASA Sports!
          </Typography>
          <Typography variant='h5'>
            Can you become the sports trivia &#128016;?
          </Typography>

          <Link
            color="inherit"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/NBA")}
          >
            <Button color="inherit"> &#127936; Trivia! </Button>
          </Link>

          <Link
            color="inherit"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/NFL")}
          >
            <Button color="inherit"> &#127944; Trivia! </Button>
          </Link>

          <Link
            color="inherit"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/EPL")}
          >
            <Button color="inherit"> &#9917; Trivia! </Button>
          </Link>

        </Grid>
      </Grid >

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
