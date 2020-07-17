var searchYouTube = (options, callback) => {

  let myOptions = {
    part:'snippet',
    key:'AIzaSyBav7w_SLMOw6PQRLBVrs9ddswHOre3VKs',
    q: 'NBA'
  };


  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: myOptions,
    success: callback
  });

  // $.ajax({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   type: 'GET',
  //   data: {
  //     part: 'snippet',
  //     type: 'video',
  //     key: options.key,
  //     maxResults: options.max,
  //     q: options.query,
  //     videoEmbeddable: 'true'
  //   },
  //   contentType: 'application/json',
  //   success: (data) => { callback(data.items); }
  // });

};

export default searchYouTube;
