var searchYouTube = (options, callback) => {

  let myOptions = {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: 'video',
    videoEmbeddable: 'true'
  };


  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: myOptions,
    contentType: 'application/json',
    success: (data) => { callback(data.items); }
  });
};

export default searchYouTube;
