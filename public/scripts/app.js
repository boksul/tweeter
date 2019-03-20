const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

const tweets = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


function createTweetElement(tweetData) {
  console.log('createTweetElement called with:', tweetData);
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
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    console.log('tweet:', $tweet);
    $("#tweets").append($tweet);
  }
}

$(function () {
  renderTweets(tweets);
})








