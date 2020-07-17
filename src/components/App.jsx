import VideoList from './VideoList.js';
import VideoPlayer from './videoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      nowPlaying: exampleVideoData[0]
    };

    this.onVideoClick = this.onVideoClick.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    // console.log(this.state.videos);
  }

  componentDidMount() {
    this.getVideos('random');
  }

  getVideos(query) {
    var options = {
      query: query,
      max: 5,
      key: this.props.apiKey
    };
    this.props.searchYouTube(options, (data) => {
      this.setState({
        videos: data,
        nowPlaying: data[0]
      });
    });
  }

  onVideoClick(video) {
    this.setState({
      nowPlaying: video
    });
  }

  onSearchClick(video) {
    this.setState({
      videos: video,
      nowPlaying: videos[0]
    });
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.nowPlaying} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onclick={this.onVideoClick} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
