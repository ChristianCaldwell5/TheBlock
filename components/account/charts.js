import React from 'react';
import axios from 'axios'
import Cookies from 'js-cookie'

const ac = ['/static/assets/songs/wil.jpeg', '/static/assets/songs/ameh.webp', '/static/assets/songs/biob.jpg', '/static/assets/songs/ea.jpg', '/static/assets/songs/sb.png','/static/assets/songs/pandemic.png', '/static/assets/songs/bm.png', '/static/assets/songs/mt.png', '/static/assets/songs/nl.jpeg', '/static/assets/songs/qc.jpeg'];
const name = [];
const artist = ['Famous Dex', 'Playboi Carti', 'DaBaby', 'Lil Uzi Vert', 'Gunna', 'Comethazine', 'Rich the Kid', 'Lil Baby', 'Lil Gotit', 'Gunna'];        
const songs = [];

getUserSongs();


function getUserSongs(){
 	axios({
                url: 'http://ec2-3-88-85-136.compute-1.amazonaws.com:3001/getUserSongs',
                async: false,
                params: {
                        username: Cookies.get("username"),
                }
        }).then(function(data){
                console.dir(data);
                console.dir(data.data);
                var i;
                var loop = 10;
                console.log(data.data.length);
                if(data.data.length < 10){
                        loop = data.data.length;
                }
                data.data.sort((a,b) => (a.popularity < b.popularity) ? 1 : -1);
                for(i=0;i<loop;i++){
			console.dir(data);
                        name[i] = data.data[i].name;
                        artist[i] = data.data[i].artists[0].name;
                        ac[i] = data.data[i].album.images[0].url;
                }
                console.dir(name);
                load();
        });
	
}


function load(){
for (const [index, value] of name.entries()) {
    songs.push(<div className="song-wrap" key={index}>
                <span className="song-rank">{index+1}.</span>
                <img className="song-pic" src={ac[index]} alt='Asset Failed'></img>
                <span className="song-title">{name[index]}</span>
                <span className="song-artist">{artist[index]}</span>
               </div>)
}
}

const Charts = () => (
    <div id="song-flex">
        {songs}
    </div>
)

export default Charts;
