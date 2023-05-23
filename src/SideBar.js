import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from './DataLayer';
import Body from './Body';
function videoPlay() {
  var name=document.querySelector(".songyt").value;
  var base_url=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAATOwaEymznb0B-DMuEKX56uAzKiZfqJQ&type=video&q=${name}`;
  let obj;
  console.log(base_url);
  fetch(base_url).then(res=>res.json()).then(data=>{
   obj=data;
  }).then(()=>{
    const myNode = document.querySelector(".video");
    myNode.innerHTML = '';
    console.log(obj);
   for(let i=0;i<3;i++){
   var x=obj.items[i].id.videoId;
   const video = document.createElement('div');
   var url = `https://www.youtube.com/embed/${x}`;
   var a = document.createElement('button');
   // a.setAttribute("href","#");
   a.setAttribute(
       'onclick',
       'this.parentNode.parentNode.removeChild(this.parentNode)'
   );
   a.innerHTML = 'CLOSE';
   video.append(a);
   const v = document.createElement('iframe');
   // width="560" height="315" src="j.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen" )
   v.setAttribute('id', 'pl');
   v.setAttribute('height', '315');
   v.setAttribute('width', '560');
   v.setAttribute('src', `${url}`);
   v.setAttribute('allowfullscreen', '');

   video.append(v);
   myNode.append(video);
   }
  })

   
 }
var t;
function playPlaylist(){

  var musicUrl=document.querySelector(".embpy").value;
  var j=musicUrl.indexOf("?"); 
  var i=musicUrl.indexOf("l");
  i=i+7;
  var f=musicUrl.slice(i+1,j)
  console.log(f);
  home(f);
}
 
 async function home(temp){
  var ar={
    method: 'GET',
    headers:{
        "Access-Control-Allow-Headers": "Authorization",
      'Authorization':'Bearer '+t,
    }
  }
  console.log(t);
  const myNode = document.querySelector(".body__songs");
  if(myNode)
   myNode.innerHTML = '';
   const myNode1 = document.querySelector(".video");
    myNode1.innerHTML = '';
    var art= await fetch(`https://api.spotify.com/v1/playlists/${temp}`,ar).then(response=>response.json()).then(data=>{return data});
console.log(art);
var a=document.querySelector(".body__songs")
document.querySelector(".coverImage").src=`${art.images[0].url}`;
// cover.replaceWith(coverimg);
var cname=document.querySelector(".coverName");
cname.innerHTML=`${art.name}`
var cdes=document.querySelector(".coverDes");
cdes.innerHTML=`${art.description}`

var total_items=art.tracks.total;
  for(let i=0;i<total_items;i++){
    var srow=document.createElement('div')
    var simg=document.createElement('img')
    var sh=document.createElement('h1')
    var sp=document.createElement('p')
    var sb=document.createElement('br')
    srow.setAttribute("class","srow")
    // var v=art.track.
    
    srow.setAttribute("value",`${art.tracks.items[i].id}`) 
    srow.setAttribute("onClick",`embedMusic2("${art.tracks.items[i].track.id}")`);
    sh.setAttribute("class",`def${i}`) 
    sp.setAttribute("class",`abc${i}`)
    if(art.tracks.items[i].track.album.images[0]!=null)
    simg.setAttribute('src',`${art.tracks.items[i].track.album.images[2].url}`)
    
    srow.append(simg);
    srow.append(sh);
    srow.append(sb);
    srow.append(sp);
  a.append(srow);
  if(art.tracks.items[i].track.name)
  document.querySelector(`.def${i}`).innerHTML=art.tracks.items[i].track.name;
  document.querySelector(`.abc${i}`).innerHTML=art.tracks.items[i].track.artists[0].name;

  }

}
 function emotion(){
  var name="emotionvalue="
  const deccokkie=decodeURIComponent(document.cookie)
  const cArr=deccokkie.split(';')
  let res;
  cArr.forEach(val=>{
  if(val.indexOf(name)===0)res=val.substring(name.length)
})

  if(res=="happy")
    home("37i9dQZF1DWTwbZHrJRIgD")
  else
  if(res=="sad")
    home("0z5GPu1ZL2ryEmPbTyH0tB")
  else
  if(res=="disgust")
      home("")
  else
  if(res=="angry")
      home("7pS8tMgJgzQ8XSGpOajOqb")
  else
  if(res=="surprise")
      home("3FDsPHUToNnMClpbcQ1fyj")
  else
  if(res=="fear")
    home("71Z4INzj80qLHXdWqGBa9R")
  

 }

function SideBar() {
    const [{playlists,token},dispatch]=useDataLayerValue()
  t=token;
  return (
    
    <div className='sidebar'>
        <img
        className="sidebar__logo"
        src="logo.jpg"
        alt=""
      />
      <div onClick={()=>home("37i9dQZF1DX0XUfTFmNBRM")}>
      <SidebarOption title="Home" Icon={HomeIcon} />
      </div>
      <div onClick={()=>home("4LBv69a4PYSqLM7HBXXyHs")}>
      <SidebarOption title="Party Songs" Icon={LibraryMusicIcon}/>
      </div>
      <div onClick={()=>home("37i9dQZF1EIUrvRct3yQWs")}>
      <SidebarOption title="Arijit Singh" Icon={LibraryMusicIcon}/>
      </div>
      <div onClick={()=>emotion()}>
      <SidebarOption title="Emotion Based" Icon={LibraryMusicIcon}/>
      </div>
     
      <br />
      {/* <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))} */}
      <div className="embed">
        <input placeholder="Embed Playlist"className="embpy"></input>
        <button className="embpy" onClick={playPlaylist}>Play</button>
      </div>
      <div className="yt">
        <input placeholder="Search for Videos of Songs"className="songyt"></input>
        <button className="playvi" onClick={videoPlay}>watch</button>
      </div>
      
    </div>
  )
  

      }
      




export default SideBar
