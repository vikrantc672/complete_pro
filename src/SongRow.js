import React from 'react'
import "./SongRow.css"

function SongRow({track, /*playSong*/}) {
  
  return (
    <div className="songRow" onClick={()=>embedMusic(track)}>
      <img className="songRow__album" 
      src={track.album.images[0]?.url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  )
}
function embedMusic(temp){
  const element = document.getElementById("player");
  if(element!=null)
element.remove();
  //https://open.spotify.com/track/26i54fXOWeA08Krvgwitxi
  
  
  // <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/26i54fXOWeA08Krvgwitxi?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  var musicUrl=temp.external_urls.spotify;
  var j=musicUrl.indexOf("k"); 
  var f=musicUrl.slice(j+1);
    var x="https://open.spotify.com/embed/track"
    var url=x.concat("",f)
    
    url=url.concat("","?utm_source=generator")
    console.log(url);
    const v = document.createElement('iframe');
    const video = document.createElement('div');
    
    v.setAttribute('id', 'player');
    v.setAttribute('src', `${url}`);
    v.setAttribute('width', '100%');
    v.setAttribute('height', '380');
    v.setAttribute('border-radius', '12px');
    v.setAttribute('allow','picture-in-picture;autoplay; clipboard-write; encrypted-media; fullscreen;')
    video.append(v);
    var y=document.querySelector(".sidebar")
    y.append(video);//l
    
  } 
  

export default SongRow;
