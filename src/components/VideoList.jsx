import VideoListEntry from './VideoListEntry.js';

var VideoList = props => (
  <div className="video-list">
    {/* Map the videos passed by props and pass each video to VideoListEntry to create a component for each video */}
    {/* Also pass the props.handleVideoClick method to each video */}
    {props.videos.map((video, index) => <VideoListEntry handleVideoClick = {props.handleVideoClick} video = {video} videoIdx={index} key={index} />)}
    {}
  </div>
);


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
