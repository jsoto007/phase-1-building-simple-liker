// https://github.com/jsoto007/phase-1-building-simple-liker
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const error = document.getElementById('modal');
// error.classList.add('hidden')
error.className = 'hidden';



const likeBtn = document.querySelectorAll('.like-glyph');

function addLike(e) {
  const heart = e.target;
  mimicServerCall("URL")
    .then(function () {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
      } else {
        heart.innerText = EMPTY_HEART;
      }
    })
}

// function addListener() {
//   for (element of likeBtn) {
//     element.addEventListener('click', (e) => {
//       if (e.target.innerHTML = EMPTY_HEART) {
//         e.target.innerHTML = FULL_HEART;
//       } else {
//         e.target.innerText = EMPTY_HEART;
//       }
//     })
//   }
// }

// addListener()



// mimicServerCall()
//   .then(res => res.json())
//   .catch((error) => {
//     console.log(error)
//   })




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}