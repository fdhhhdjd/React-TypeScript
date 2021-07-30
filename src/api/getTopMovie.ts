import axios from "axios";
const topMovieIDs = [
  "tt4154796",
  "tt0348150",
  "tt0068646",
  "tt0071562",
  "tt0468569",
  "tt0050083",
  "tt0108052",
  "tt0167260",
  "tt0110912",
  "tt0060196",
  "tt0120737",
];
const topMovieInfo = topMovieIDs.map((id) =>
  axios.get(`http://www.omdbapi.com/?i=${id}&apikey=fe5a9562`)
);
export default topMovieInfo;
