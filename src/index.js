// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYoutube from '../lib/searchYoutube.js';

let updateStateWithYouTubeData = function(data) {
  this.setState({
    videoList: data
  });
};

let defineYouTubeSearch = function() {
  searchYoutube(options, updateStateWithYouTubeData.bind(App));
};



//Render App to the DOM at id = "app"
ReactDOM.render(
  <App searchYoutube = {defineYouTubeSearch} />, document.getElementById('app'));