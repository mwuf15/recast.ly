//Steps:
//Step 1: Accept the Video object as props
//Steps 2: Construct the src as follows: 'https://www.youtube.com/embed/' + {props.id.videoId} + '?autoplay=1'
//Step 3: Construct the title as follows: {props.video.snippet.title}
//Step 4: Construct the video description as follows: {props.video.snippet.description}

var VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.video.id.videoId} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.video.snippet.title}</h3>
      <div>{props.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
