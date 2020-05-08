import React from 'react';
import axios from 'axios'
import Cookies from 'js-cookie'


var ac = ['/static/assets/songs/wil.jpeg', '/static/assets/songs/ameh.webp', '/static/assets/songs/biob.jpg', '/static/assets/songs/ea.jpg', '/static/assets/songs/sb.png',
            '/static/assets/songs/pandemic.png', '/static/assets/songs/bm.png', '/static/assets/songs/mt.png', '/static/assets/songs/nl.jpeg', '/static/assets/songs/qc.jpeg'];
var name = [];
var artist = ['Famous Dex', 'Playboi Carti', 'DaBaby', 'Lil Uzi Vert', 'Gunna', 'Comethazine', 'Rich the Kid', 'Lil Baby', 'Lil Gotit', 'Gunna'];        
var songs = [];

getSongs();

function getSongs(){
        console.log("test");
        axios({
                url: 'http://ec2-3-88-85-136.compute-1.amazonaws.com:3001/getSongs',
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
		var loop = 50;
		console.log(data.data.length);
		if(data.data.length < 50){
			loop = data.data.length;
		}
		data.data.sort((a,b) => (a.popularity < b.popularity) ? 1 : -1);
                for(i=0;i<loop;i++){
                        console.log(data.data[i].popularity);
			//data.data.sort((a,b) => (a.popularity < b.popularity) ? 1 : -1);
			console.dir(data.data);
			name[i] = data.data[i].name;
			artist[i] = data.data[i].artist;
			ac[i] = data.data[i].image;
			//console.log(name[i]);
			//console.dir(name);
			//load();
                }
		load();
        });
}


function load(){
for (const [index, value] of name.entries()) {
    songs.push(<div className="explore-song" key={index}>
                <span className='song-rank'>{index+1}.</span>
                <img className="song-cover" src={ac[index]} alt='Asset Failed'></img>
                <div className='song-detail-wrapper'>
                    <span className="song-detail-primary">{name[index]}</span>
                    <span className="song-detail-secondary">{artist[index]}</span>
                </div>
               </div>)
}
}
const Echart = () => (
    <div id="explore-container">
        {songs}
    </div>
)


export default Echart;

