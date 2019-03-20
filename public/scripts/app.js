
const tweetData = {}
const tweets = []



function createTweetElement(tweetData) {
  const name = tweetData.user.name
  const small = tweetData.user.avatars.small
  const handle = tweetData.user.handle
  const comment = tweetData.content.text
  const date = tweetData.created_at
  const $article = $('<article>');
  $article.addClass('tweet-container');
  //create img
  const $img = $('<img>')
  $img.addClass('logo');
  $img.attr('src', small);

  //create h2 for header
  const $h2 = $('<h2>')
  $h2.text(name);

  const $h3 = $('<h3>')
  $h3.text(handle);

  //create header
  const $header = $('<header>');
  $header.append($img).append($h2).append($h3);

  //create tweet body
  const $bodySec = $('<section>');
  $bodySec.addClass('content');

  const $pCont = $('<p>');
  $pCont.addClass('comment');
  $pCont.text(comment);

  $bodySec.append($pCont);

  //create footer
  const $pDate = $('<p>');
  $pDate.text(date);
  const $imgOne = $('<img>');
  $imgOne.addClass('hidden heart');
  $imgOne.attr('src', "/images/twitterHeart.png");
  const $imgTwo = $('<img>');
  $imgTwo.addClass('hidden reuse');
  $imgTwo.attr('src', "/images/twitterReuse.png");
  const $imgThree = $('<img>');
  $imgThree.addClass('hidden flag');
  $imgThree.attr('src', "/images/twitterFlag.png");
  const $footer = $('<footer>');
  $footer.append($pDate).append($imgOne).append($imgTwo).append($imgThree);

  $article.append($header).append($bodySec).append($footer);

  return $article;
}


function renderTweets(tweets) {
  $("#tweets").html("")
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    console.log('tweet:', $tweet);
    $("#tweets").prepend($tweet);
  }
}


$(document).ready(() => {
  function loadTweets() {
    $.ajax('http://localhost:8080/tweets', { method: 'GET'})
    .then(
      (tweets) => {
        renderTweets(tweets)
      }
    )
  }
  loadTweets()

  $('#nav-bar .compose').on('click', function(e) {
    $('.new-tweet').slideToggle(400, function(e) {
      $('.new-tweet').focus();
    });
  })

  //Creating New-Tweets
  const noWords = $('.noWords-error');
  const tooMany = $('.tooManyWords-error');

  //handler for submit
  $('#tweet_form').submit(function(e) {
    event.preventDefault();
    var tweetText = $('#tweetText').val();
  //validations before submitting
    if (tweetText === null || tweetText === "") {
      noWords.css({"opacity": "1"})
    } else if (tweetText.length > 140) {
      tooMany.css({"opacity": "1"})
    } else {
      var data = $('#tweet_form').serialize();
        $('#tweet_form')[0].reset()
        $.ajax({
          url:'/tweets',
          method: 'POST',
          data: data,
          success: function(empty) {
            loadTweets();
            tooMany.css({"opacity": "0"});
            noWords.css({"opacity": "0"});
            $('.counter').text('140')
          },
          error: function(err) {
            console.log("there was some error posting data", err);
          }
        });
      }
    })
})
