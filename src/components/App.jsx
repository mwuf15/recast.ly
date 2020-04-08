import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    //Initializing state for video list and current video
    this.state = {
      videoList: [{id: {videoId: null}, snippet: {title: null, description: null, thumbnails: {default: {url: null}}}}],
      currentVideoIdx: 0
    };
  }

  //if searchYoutube is passed as a prop - invoke props.searchYoutube
  //else invoke searchYoutube
  componentDidMount() {
    let options = {key: null, max: 5, query: ''};
    this.props.searchYouTube(options, data => {
      this.setState({
        videoList: data
      });
    });
  }
  handleNewQuery (event) {
    let query = event.target.value;
    //Declare an options object, passing key:null, max: 5, query: query
    let options = { key: null, max: 5, query: query};
    //if query.length = 1 or query.length % 3 = 0 then invoke searchYouTube
    //set state: this.props.searchYouTube(options, data =>{this.setState({videosList:data});});
    this.props.searchYouTube(options, data => {
      this.setState({
        videoList: data
      });
    });
  }

  //Define a handleVideoClick - method
  handleVideoClick (event) {
    let selectedVideoIdx = event.target.getAttribute('id');
    this.setState({
      currentVideoIdx: selectedVideoIdx
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {/* create a prop to child component:handleNewQuery */}
            <Search handleNewQuery = {this.handleNewQuery.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.videoList[this.state.currentVideoIdx]} />
          </div>
          <div className="col-md-5">
            <VideoList handleVideoClick = {this.handleVideoClick.bind(this)} videos = {this.state.videoList} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
