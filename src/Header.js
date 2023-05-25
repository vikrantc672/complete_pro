import React from 'react'
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import { useDataLayerValue } from './DataLayer';
import "./SongRow.css"
var t;


async function showSongs(){
  var ar={
    method: 'GET',
    headers:{
        "Access-Control-Allow-Headers": "Authorization",
      'Authorization':'Bearer '+t,
      
      
    }
  }
  var name=document.querySelector(".searchSong").value;
  const myNode = document.querySelector(".body__songs");
  if(myNode)
   myNode.innerHTML = '';
   const myNode1 = document.querySelector(".video");
    myNode1.innerHTML = '';
    var art= await fetch(`https://api.spotify.com/v1/search?query=${name}&type=track&locale=en-US%2Cen%3Bq%3D0.9&offset=20&limit=20`,ar).then(response=>response.json()).then(data=>{return data});
console.log(art);
var a  = document.querySelector(".body__songs");

  for(let i=0;i<art.tracks.total;i++){
    var srow=document.createElement('div')
    var simg=document.createElement('img')
    var sh=document.createElement('h1')
    var sp=document.createElement('p')
    var sb=document.createElement('br')
    srow.setAttribute("class","srow")
    // var v=art.track.
    srow.setAttribute("value",`${art.tracks.items[i].id}`) 
    srow.setAttribute("onClick",`embedMusic2("${art.tracks.items[i].id}")`);
    sh.setAttribute("class",`def${i}`) 
    sp.setAttribute("class",`abc${i}`)
    simg.setAttribute('src',`${art.tracks.items[i].album.images[2].url}`)
    srow.append(simg);
    srow.append(sh);
    srow.append(sb);
    srow.append(sp);
  a.append(srow);
  document.querySelector(`.def${i}`).innerHTML=art.tracks.items[i].name;
  document.querySelector(`.abc${i}`).innerHTML=art.tracks.items[i].artists[0].name;

  }

}



function Header({spotify}) {
    const [{user,token},dispatch]=useDataLayerValue();
    console.log(user);
    t=token;
  return (     
    
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text" className='searchSong'
        />
        <button onClick={showSongs}>Search</button>
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
