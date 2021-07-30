import axios from "axios";
import { createContext, ReactNode, useReducer } from "react";
import topMovieInfo from "../api/getTopMovie";
import { topMovieReducer, TopMovieState } from "../Reducer/TopmovieReducer";
import { TopMovieActionType } from "../Reducer/type";
const { GET_TOP_MOVIES, TOOGLE_WATCH } = TopMovieActionType;
interface TopMovieContextProps {
  children: ReactNode;
}
interface TopMovieContextDefault {
  topMovies: TopMovieState;
  getTopMovies: () => Promise<void>;
  TogleWatched: (id: string) => void;
}
const topMovieDefault: TopMovieState = [];
export const TopMovieContext = createContext<TopMovieContextDefault>({
  topMovies: topMovieDefault,
  //   Thực thi các tác vụ bất đồng bộ ở đây, và gọi `resolve(result)` khi tác
  // vụ hoàn thành. Nếu xảy ra lỗi, gọi đến `reject(error)`. (void 0 la undefined.)
  getTopMovies: () => Promise.resolve(void 0),
  TogleWatched: (id: string) => {},
});
const TopMovieContextProvider = ({ children }: TopMovieContextProps) => {
  const [topMovies, dispatch] = useReducer(topMovieReducer, topMovieDefault);

  //get api movies

  const getTopMovies = async () => {
    // const topMovie = await axios.get(
    //   `http://www.omdbapi.com/?i=tt4154796&apikey=fe5a9562`
    // );
    const topMovie = await Promise.all(topMovieInfo);
    dispatch({
      type: GET_TOP_MOVIES,
      //   payload: [{ ...topMovie.data, Watched: false }],
      payload: topMovie.map((topMovies) => ({
        ...topMovies.data,
        Watched: false,
      })),
    });
  };
  //toogle check
  const TogleWatched = (imdbID: string) =>
    dispatch({
      type: TOOGLE_WATCH,
      payload: imdbID,
    });
  const movieContextData = {
    topMovies,
    getTopMovies,
    TogleWatched,
  };

  return (
    <TopMovieContext.Provider value={movieContextData}>
      {children}
    </TopMovieContext.Provider>
  );
};
export default TopMovieContextProvider;
