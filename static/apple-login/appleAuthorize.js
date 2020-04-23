// listen for MusicKit Loaded callback
// document.addEventListener('musickitloaded', () => {
//   // MusicKit global is now defined
//   fetch('http://127.0.0.1:4000/token', {mode: 'no-cors'}).then(response => response.json()).then(res => {
//     /***
//       Configure our MusicKit instance with the signed token from server, returns a configured MusicKit Instance
//       https://developer.apple.com/documentation/musickitjs/musickit/musickitinstance
//     ***/
//     //, {mode: 'no-cors'}
//     const music = MusicKit.configure({
//       developerToken: res.token,
//       app: {
//         name: 'AppleMusicKitExample',
//         build: '1978.4.1'
//       }
//     });
//
//     document.getElementById('apple-login-btn').addEventListener('click', () => {
//       music.authorize().then(musicUserToken => {
//         console.log(`Authorized, music-user-token: ${musicUserToken}`);
//       });
//     });
//
//     // expose our instance globally for testing
//     window.music = music;
//   });
// });

document.addEventListener('musickitloaded', () => {
  // MusicKit global is now defined
  fetch("http://127.0.0.1:8000/token", {method: "GET", headers: {'Content-Type':'application/json'}}).then(response => response.json()).then(response => {
      //Configure our MusicKit instance with the signed token from server, returns a configured MusicKit Instance
      //https://developer.apple.com/documentation/musickitjs/musickit/musickitinstance
      //, {mode: 'no-cors'} , {method: "POST"}
      //, { method: "POST", headers: {"Content-Type": "text/plain" , 'Accept':'application/json'}
      // .then(response => response.json())
    const music = MusicKit.configure({
        developerToken: response.token,
        app: {
            name: 'AppleMusicKitExample',
            build: '1978.4.1'
        }
    });

    document.getElementById('apple-login-btn').addEventListener('click', () => {
        music.authorize().then(musicUserToken => {
            console.log(`Authorized, music-user-token: ${musicUserToken}`);
        });
    });

    // expose our instance globally for testing
    window.music = music;
});
});
