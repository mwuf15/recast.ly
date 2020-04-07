import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.videos);
    //Initializing state for video list and current video
    this.state = {
      videoList: exampleVideoData,
      currentVideoIdx: 0
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
            <VideoPlayer video = {this.state.videoList[this.state.currentVideoIdx]} />
          </div>
          <div className="col-md-5">
            {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
            <VideoList videos = {this.state.videoList} />

          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
