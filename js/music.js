const musicFiles = [
    '../music/menu1.mp3',
    '../music/menu2.mp3',
    '../music/menu3.mp3',
    '../music/menu4.mp3'
];

const music = document.getElementById('background-music');
const musicSource = document.getElementById('music-source');
const playButton = document.getElementById('play-button');
const toggleIcon = document.getElementById('toggle-icon');

let isMusicPlaying = false;

function playRandomMusic() {
    const randomIndex = Math.floor(Math.random() * musicFiles.length);
    musicSource.src = musicFiles[randomIndex];
    music.load();  // Reload the audio
    music.play();
    isMusicPlaying = true;
}

function pauseMusic() {
    music.pause();
    isMusicPlaying = false;
}

function toggleMusic() {
    isMusicPlaying = !isMusicPlaying;  // Toggle music play state

    if (isMusicPlaying) {
        playButton.style.display = 'inline-block'; // Show play button
        toggleIcon.src = '../icons/on.png'; // Change icon to 'on'
        playRandomMusic(); // Start playing music
    } else {
        playButton.style.display = 'none'; // Hide play button
        toggleIcon.src = '../icons/off.png'; // Change icon to 'off'
        pauseMusic(); // Pause music
    }
}

// Add event listener to the play button
playButton.addEventListener('click', toggleMusic);