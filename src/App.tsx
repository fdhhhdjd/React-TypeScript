import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import ProgressContextProvider from "./Context/ProgressContext";
import ThemeContextProvider from "./Context/ThemeContext";
import ToggleBtn from "./Component/ToggleBtn";
import MovieContextProvider from "./Context/MovieContext";
import Movie from "./Component/Movie";
import AuthContextProvider from "./Context/AuthContext";
import { Grid } from "@material-ui/core";
import TopMovie from "./Component/TopMovie";
import TopMovieContextProvider from "./Context/TopmovieContext";

function App() {
  return (
    <div>
      <TopMovieContextProvider>
        <AuthContextProvider>
          <MovieContextProvider>
            <ThemeContextProvider>
              <ProgressContextProvider>
                <Navbar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovie />
                  </Grid>
                  <Grid item xs={8}>
                    <Movie />
                  </Grid>
                </Grid>
                <ToggleBtn />
              </ProgressContextProvider>
            </ThemeContextProvider>
          </MovieContextProvider>
        </AuthContextProvider>
      </TopMovieContextProvider>
    </div>
  );
}

export default App;
