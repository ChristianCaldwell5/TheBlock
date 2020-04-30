import React from 'react';
import axios from 'axios'
import Cookies from 'js-cookie'

const ac = ['https://i.scdn.co/image/ab67616d0000b273600adbc750285ea1a8da249f', "https://i.scdn.co/image/ab67616d0000b2736443676b54522a86f6323e65", "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36", "https://i.scdn.co/image/ab67616d0000b27382b243023b937fd579a35533", "https://i.scdn.co/image/ab67616d0000b273c6f7af36ecdc3ed6e0a1f169", "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/96/22/7b/96227bb8-7f3c-b46e-6099-026168f8f018/192641455810_Cover.jpg/640x640bb.jpeg", "https://i.scdn.co/image/ab67616d0000b273ddd3154c58e15a8bdb63bbcc", "https://i.scdn.co/image/ab67616d0000b273069a93617a916760ab88ffea", "https://i.scdn.co/image/ab67616d0000b2733667dc27da7b24360d6050d0", "https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02"];
const name = ['The Box','Toosie Slide', 'Blinding Lights', 'Say So', 'Dance Monkey','Big Racks', 'Tusa', 'ROXANNE', 'Sunday Best', 'Circles' ] ;
const artist = ['Roddy Rich', 'Drake','The Weeknd', 'Doja Cat', 'Tones And I', 'ABG Neal','KAROL G','Arizona Zervas', 'Surfaces', 'Post Malone' ];        
const songs = [];

getAllSongs();

function getAllSongs(){
	axios({
                url: 'http://ec2-3-88-85-136.compute-1.amazonaws.com:3001/getAllSongs',
		async: false,
                params: {
                        username: Cookies.get("username"),
                        country: Cookies.get("country"),
                        state: Cookies.get("state"),
                        city: Cookies.get("city"),
                        age: Cookies.get("age"),
                        gender: Cookies.get("gender")
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
			name[i] = data.data[i].name;
			artist[i] = data.data[i].artist;
			ac[i] = data.data[i].image;
		}
		console.dir(name);
		//load();
	});

}

/*function getUserSongs(){
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
                        name[i] = data.data[i].name;
                        artist[i] = data.data[i].artist;
                        ac[i] = data.data[i].image;
                }
                console.dir(name);
                load();
        });
	
}*/

var today = new Date();

//function load(){
console.log("loaded at " + today.getHours() + ":" + today.getMinutes() + ":"  + today.getSeconds());
for (const [index, value] of artist.entries()) {
    songs.push(<div className="song-wrap" key={index}>
                <span className="song-rank">{index+1}.</span>
                <img className="song-pic" src={ac[index]} alt='Asset Failed'></img>
                <span className="song-title">{name[index]}</span>
                <span className="song-artist">{artist[index]}</span>
               </div>)
}
//}

const Charts = () => (
    <div id="song-flex">
        {songs}
    </div>
)

export default Charts;
