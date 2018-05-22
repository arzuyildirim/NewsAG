var allStories = [];


// BBC
var bbcxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=bbc-news");
bbcxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#BBCnewsContent').append($el);
    }
  }
});

