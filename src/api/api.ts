import axios from "axios";

export const mainAPI = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=';

export const api = axios.create({
    baseURL: mainAPI,
    headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "0bd4b5da77msh27fe477abac7ceep19c3b8jsn91d822e0a82d"
    }
})   

/*const inputSearch = document.querySelector('#search');
const playlist = document.querySelector('.playlist');
const currentMusic = document.querySelector('.current-music');
const faPlayCircle = document.querySelector('.playPause');
const audioTrack = document.querySelector('.current-music');


const mainAPI = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=';
const src = [];

//Para a pesquisa
inputSearch.addEventListener('keypress', (event) => {
   if(event.keyCode === 13 ){
      const searchValue = inputSearch.value.trim();
      if (!searchValue) {
         alert('Por favor insira os dados, para pesquisar');
         return;
       }      
       searchResult(searchValue)
       
    }});

      //Requisição da API do lyric
const searchResult = async(artist)=>{
   try {
      const response = await fetch(`${mainAPI}${artist}`,{
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "0bd4b5da77msh27fe477abac7ceep19c3b8jsn91d822e0a82d"
        } } );
      const data = await response.json();
      console.log('data', data.data);
      showPlaylist(data.data)
    } catch (error){
      console.log(error);
    }
  };





//Mostrando o resultado do response na tela
 const showPlaylist = (data) => {
   playlist.innerHTML = data.map(
     (music) =>
     `
     <li class="song">
     <div class="song-content">
         <span class="song-artist">
           <img src="${music.album.cover}" class="artist-img"/>
         </span>
         <div class="all-controls">
         <div class="artist-info">
         <div class="buttons">
         <div class="musicPlay" data-src="${music.preview}"></div>

    <div class="playPause">
    <i class="fas fa-play-circle"></i>
    </div>
            </div>
   <div class="info">
     <span class="artist-name">${music.artist.name}</span><span class="music-tittle"><strong>${music.title}</strong></span>
   </div>
   </div>
   

     <div class="slider_container">
    <div class="current-time">00:00</div>
    <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()"/>
    <div class="total-duration">00:00</div>
 </div>
 

   <div class="others">
   <span><i class="fas fa-heart"></i> Like</span>
   <span><i class="fas fa-redo"></i> Repost</span>
   <span><i class="fas fa-bars"></i> Add to Playlist</span>
   <span><i class="fas fa-share-square"></i>Share</span>
   </div>
   </div>
  </div>

 </li>
 `)
};


document.addEventListener('click', (e)=>{
     const element = e.target;
     if(element.classList.contains('musicPlay')){
    const src = element.getAttribute('data-src');
    audioTrack.querySelector('audio').src = src;
  }


    if(audioTrack.querySelector('audio').paused){
      audioTrack.querySelector('audio').play();
    }
  }
);

//  function loader() {
//      document.querySelector('.loader').classList.add('fade-out');
//    }

//   function fadeout(){
//      setInterval(loader, 5000);
     
//    }

//   window.onload = fadeout();
  
  


//api deezer to take track
  //https://api.deezer.com/track/3135556
  */