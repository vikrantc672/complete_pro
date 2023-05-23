import React,{useEffect,useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify=new SpotifyWebApi();
function App() {
  const [{user,token,playlists},dispatch]=useDataLayerValue();//take out data from datalayer
  useEffect(() => {
    const hash=getTokenFromUrl();
    window.location.hash="";   //to remove token from url to keep it secret
    const _token=hash.access_token;
    spotify.setAccessToken(_token);

    if(_token){
      
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })
      //Get the details of the user
      spotify.getMe().then((user)=>{
        //Push data to the datalayer
        dispatch({
            type:"SET_USER",
            user:user
        })
      })
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists
        })
      })
      spotify.getPlaylist("37i9dQZEVXbLZ52XmnySJg").then((response)=>{
        dispatch({
          type:"SET_DISCOVERWEEKLY",
          discover_weekly:response
        })
      })
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });


    }
    
    
  }, [token,dispatch]);
  return (
    <div className="App">
    {
    token?(
      <Player spotify={spotify}/>
    ):(
      <Login/>
      )
  }
  </div>
  )
}
export default App;
