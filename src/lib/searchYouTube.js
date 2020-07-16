var searchYouTube = (options, successCB) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      maxResults: options.max,
      q: options.query,
      videoEmbeddable: true,
      type: 'video'
    },
    contentType: 'application/json',
    dataType: 'json',
    success: function(data) {
      successCB(data.items);
    },
    error: function(error) {
      console.error('failed to retrieve videos', error);
    }
  });
};

export default searchYouTube;
