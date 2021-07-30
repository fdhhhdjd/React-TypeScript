import React, { useContext, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { TopMovieContext } from "../Context/TopmovieContext";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    TopMovieHeader: {
      paddingBottom: 0,
    },
    TopMovieList: {
      paddingTop: 0,
    },
    TopMovieItem: {
      paddingTop: "2px",
      paddingBottom: "2px",
    },
    opacity: {
      backgroundColor: "rgba(255, 255, 255, 0.4)",
    },
  })
);
const TopMovie = () => {
  const classes = useStyles();
  const { topMovies, getTopMovies, TogleWatched } = useContext(TopMovieContext);
  useEffect(() => {
    getTopMovies();
  }, []);
  return (
    <Box mt={1} ml={2}>
      <Card raised className={classes.opacity}>
        <CardHeader
          title="Top 10 movies of all time"
          className={classes.TopMovieHeader}
          titleTypographyProps={{
            variant: "h4",
            align: "center",
            color: "primary",
          }}
        />
        <CardContent className={classes.TopMovieList}>
          <List>
            {topMovies.map((movie) => (
              <ListItem
                button
                className={classes.TopMovieItem}
                key={movie.imdbID}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={movie.Watched}
                    onClick={TogleWatched.bind(this, movie.imdbID)}
                  />
                </ListItemIcon>
                <ListItemText primary={movie.Title} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopMovie;
