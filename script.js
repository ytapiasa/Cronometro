


/* Play button*/
function togglePlayPause() {
    let playIcon = document.getElementById('play-icon');
    let pauseIcon = document.getElementById('pause-icon');


    if (playIcon.style.display === 'block') {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';

      console.log('Play button clicked');
    } else {
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';

      console.log('Pause button clicked');
    }
  }