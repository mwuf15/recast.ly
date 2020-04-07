import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    //Initializing state for video list and current video
    this.state = {
      videoList: exampleVideoData,
      currentVideoIdx: 0
    };
  }

  //Define a handleVideoClick - method
  //For now, just accept the event as a parameter
  //Console.log(event)
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
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.videoList[this.state.currentVideoIdx]} />
          </div>
          <div className="col-md-5">
            {/* Pass the handleClickVideo method as a Prop */}
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
