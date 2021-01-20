const img = document.querySelector('img');
const music = document.querySelector('audio');
const play = document.getElementById('play');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [
    {
        name: "img-1",
        title: "Dil Royi Jaye",
        artist: "Arijit Singh"
    },
    {
        name: "img-2",
        title: "Duniyaa",
        artist: "Akhil"
    },
    {
        name: "img-3",
        title: "Roke Na Ruke Naina",
        artist: "Arijit Singh"
    }
]

let isPlaying = false;

play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
});

const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('anime')
};

const pauseMusic = () =>{
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime')
};

// Controls
const loadSongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.title + ".mp3"
    img.src = "img/" + songs.name + ".jpg" 
}
let songIndex = 0;

const nextSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}

const prevSong = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);