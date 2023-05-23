import React from 'react'
import "./Body.css"
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from './SongRow';

function Body({spotify}) {
  const [{discover_weekly},dispatch]=useDataLayerValue()
  return (
    <div className='body'>
      <Header spotify={spotify}/>
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" className="coverImage"/>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2 className='coverName'>{discover_weekly?.name}</h2>
          <p className='coverDes'>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle"  onClick=""/*{playPlaylist}*/ />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
          </div>
          {discover_weekly?.tracks.items.map((item) => (
          <SongRow /*playSong={playSong}*/ track={item.track} />
        ))}
        </div>
        <div className="video">

        </div>

    </div>
  )
}

export default Body
