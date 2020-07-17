import VideoList from './VideoList.js';
import VideoPlayer from './videoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';
//import YOUTUBE_API_KEY from '../config/youtube.js';
//import searchYouTube from '../lib/searchYouTube.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      nowPlaying: null
    };

    // console.log(this.searchYoutube({
    //   query: query,
    //   max: 5,
    //   key: YOUTUBE_API_KEY
    // }), ()=>{});
    this.onVideoClick = this.onVideoClick.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    // console.log(this.state.videos);
  }

  componentDidMount() {
    let options = {};
    this.props.searchYouTube(options, (data)=> { console.log(data); } );





    // var options = {
    //   query: 'random',
    //   max: 5,
    //   key: this.props.apiKey
    // };
    // this.props.searchYouTube(options, (data) => {
    //   this.setState({
    //     videos: data.items,
    //     nowPlaying: data.items[0]
    //   });
    // });



    // console.log(this.state);
  }

  // getVideos(query) {
  //   var options = {
  //     query: query,
  //     max: 5,
  //     key: YOUTUBE_API_KEY
  //   };
  //   this.searchYoutube(options, () => {
  //     this.setState({
  //       videos: videos,
  //     });
  //   });
  // }

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
            {/* <div><h5><em>search</em> view goes here</h5></div> */}
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
            {/* <VideoPlayer video={this.state.nowPlaying} /> */}
          </div>
          <div className="col-md-5">
            {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
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
