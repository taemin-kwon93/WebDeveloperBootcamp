const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function(e) {
    e.preventDefault()
    // const usernameInput = document.querySelector('input')[0];
    // const tweetInput = document.querySelector('input')[1];
    const username = tweetForm.elements.username;
    const tweet = tweetForm.elements.tweet;

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    username.value = '';
    tweet.value = '';
});



// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//
//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });
//
// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }
