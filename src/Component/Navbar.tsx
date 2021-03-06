import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import WelcomeMessage from "./WelcomeMessage";
import {
  Box,
  Chip,
  Select,
  MenuItem,
  FormControl,
  // InputLabel
} from "@material-ui/core";
import { useContext, useState, ChangeEvent, useEffect } from "react";
import { ProgressContext } from "../Context/ProgressContext";
import { ThemeContext } from "../Context/ThemeContext";
import Login from "./Login";
import { AuthContext } from "../Context/AuthContext";
import Moment from "react-moment";
import "moment/locale/vi";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white",
      borderBottom: "1px solid white",
    },
  })
);
const Navbar = () => {
  const classes = useStyles();
  // useState
  const [position, setPosition] = useState<string>("Full-stack Developer");

  const onPositionChange = (event: ChangeEvent<{ value: unknown }>) => {
    setPosition(event.target.value as string);
  };
  //time
  const [Time, setTime] = useState<Date>(() => new Date(Date.now()));
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  //context
  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);
  //Login open
  const [loginOpen, setLoginOpen] = useState(false);

  const {
    authInfo: { isauthenticated },
    toggleAuth,
  } = useContext(AuthContext);
  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6"> Company ReactJS</Typography>

          <Box textAlign="center">
            <WelcomeMessage position={position} />
            {/* thong diep */}
            <Chip
              label={`last time working on this project:${lastTime}- Status:${status}`}
            />

            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  className={classes.positionSelect}
                  onChange={onPositionChange}
                >
                  <MenuItem value="Full-stack Developer">
                    Full-stack Developer
                  </MenuItem>
                  <MenuItem value="Front-end Developer">
                    Front-end Developer
                  </MenuItem>
                  <MenuItem value="Back-end Developer">
                    Back-end Developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">
                {/* {Time.toUTCString()} */}
                <Moment format=" dddd, Do MMMM  YYYY, LT:mm:ss a">
                  {Time}
                </Moment>
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={
                isauthenticated
                  ? toggleAuth.bind(this, "")
                  : setLoginOpen.bind(this, true)
              }
            >
              {isauthenticated ? "Logout" : "Login"}
            </Button>
          </Box>
          <Login isOpen={loginOpen} handleClose={setLoginOpen} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
