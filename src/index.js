// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';

//Render App to the DOM at id = "app"
ReactDOM.render(<App searchYouTube={searchYouTube} />, document.getElementById('app'));