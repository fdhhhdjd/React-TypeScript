import { Box, Button, Chip, PropTypes, TextField } from "@material-ui/core";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  Fragment,
  useContext,
  useState,
} from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { MovieContext } from "../Context/MovieContext";
import { ThemeContext } from "../Context/ThemeContext";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    MovieInput: {
      marginRight: "5px",
    },
    movieInput: {
      marginRight: "10px",
      fontSize: "1.2rem",
    },
  })
);
const Movie = () => {
  const classes = useStyles();
  const [movie, setMovies] = useState("");
  const HandleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMovies(e.target.value);
  };

  const { theme } = useContext(ThemeContext);
  const isColor = theme as Exclude<PropTypes.Color, "inherit">;
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
  return (
    <Fragment>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your Favorite Movie"
          variant="outlined"
          className={classes.MovieInput}
          onChange={HandleChange}
          value={movie}
        />
        <Button
          variant="contained"
          color={isColor}
          onClick={() => {
            addMovie(movie);
            setMovies("");
          }}
        >
          Add
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.title}
            clickable
            color={isColor}
            className={classes.movieInput}
            onDelete={deleteMovie.bind(this, movie.id)}
          />
        ))}
      </Box>
    </Fragment>
  );
};

export default Movie;
