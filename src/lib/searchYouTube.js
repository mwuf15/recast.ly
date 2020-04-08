import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key || YOUTUBE_API_KEY,
      q: options.query,
      part: 'snippet',
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: true,
    },
    success: function(data) {
      setTimeout(function() {
        callback(data.items);
      }, 1000);
    },
    error: function(response) {
      console.log(response);
    }
  });
};

export default searchYouTube;
