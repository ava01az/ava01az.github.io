// Get references to the image and audio elements
const image = document.getElementById('myImage');
const audio = document.getElementById('myAudio');

// Add a click event listener to the image
image.addEventListener('click', () => {
  // Check if the audio is currently playing
  if (audio.paused) {
    // Play the audio
    audio.play();
  } else {
    // Pause the audio
    audio.pause();
  }
});

const imageO = document.getElementById('myImageO');
const audioO = document.getElementById('myAudioO');

// Add a click event listener to the image
imageO.addEventListener('click', () => {
  // Check if the audio is currently playing
  if (audioO.paused) {
    // Play the audio
    audioO.play();
  } else {
    // Pause the audio
    audioO.pause();
  }
});
