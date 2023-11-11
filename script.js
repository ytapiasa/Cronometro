function togglePlayPause() {
    var playIcon = document.getElementById('play-icon');
    var pauseIcon = document.getElementById('pause-icon');

    // Toggle display of play and pause icons
    if (playIcon.style.display === 'block') {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      // Add logic for play action here
      console.log('Play button clicked');
    } else {
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      // Add logic for pause action here
      console.log('Pause button clicked');
    }
  }