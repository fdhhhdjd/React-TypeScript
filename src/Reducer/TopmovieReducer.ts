import { TopMovieActionType } from "./type";
interface TopMovie {
  imdbID: string;
  Title: string;
  Watched: boolean;
}
export type TopMovieState = TopMovie[];
const { GET_TOP_MOVIES, TOOGLE_WATCH } = TopMovieActionType;
type TopMovieAction =
  | {
      type: typeof GET_TOP_MOVIES;
      payload: TopMovie[];
    }
  | {
      type: typeof TOOGLE_WATCH;
      payload: string;
    };
export const topMovieReducer = (
  state: TopMovieState,
  action: TopMovieAction
) => {
  switch (action.type) {
    case GET_TOP_MOVIES:
      return action.payload;
    case TOOGLE_WATCH:
      return state.map((topmovie) =>
        topmovie.imdbID === action.payload
          ? { ...topmovie, Watched: !topmovie.Watched }
          : topmovie
      );
    default:
      return state;
  }
};
