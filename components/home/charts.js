import React from 'react';

const ac = ['/static/assets/songs/wil.jpeg', '/static/assets/songs/ameh.webp', '/static/assets/songs/biob.jpg', '/static/assets/songs/ea.jpg', '/static/assets/songs/sb.png',
            '/static/assets/songs/pandemic.png', '/static/assets/songs/bm.png', '/static/assets/songs/mt.png', '/static/assets/songs/nl.jpeg', '/static/assets/songs/qc.jpeg'];
const name = ['What I Like', '@ MEH', "CAN'T STOP", 'Silly Watch', 'SKYBOX', 'GET OUT', "AIN'T NO DOUBTS", 'Consistent', 'Never Legit', 'Quarantine Clean'];
const artist = ['Famous Dex', 'Playboi Carti', 'DaBaby', 'Lil Uzi Vert', 'Gunna', 'Comethazine', 'Rich the Kid', 'Lil Baby', 'Lil Gotit', 'Gunna'];        
const songs = [];
for (const [index, value] of ac.entries()) {
    songs.push(<div className="song-wrap" key={index}>
                <span className="song-rank">{index+1}.</span>
                <img className="song-pic" src={ac[index]} alt='Asset Failed'></img>
                <span className="song-title">{name[index]}</span>
                <span className="song-artist">{artist[index]}</span>
               </div>)
  }

const Charts = () => (
    <div id="song-flex">
        {songs}
    </div>
)

export default Charts;
