import "./js/theme/index"
import "./sass/main.scss"
// import { playerYoutubeStart } from "./js/player-youtube"


document.onload = init();

function init() {
  // play and load videos
  import(/* webpackPrefetch: true */ "./js/player").then(({ playerStart }) => {
    playerStart()
  });
  // play and load videos youtube
  import(/* webpackPrefetch: true */ "./js/player-youtube").then(({ playerYoutubeStart }) => {
    playerYoutubeStart()
  });
}