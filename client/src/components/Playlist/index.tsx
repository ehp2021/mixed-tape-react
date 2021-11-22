import React from "react";
import './Playlist.css';

import { Wrapper, Content } from "./Playlist.styles.js";

const Playlist = ({track}:any) => {

  return (
  <>
  <Wrapper>
    <Content>
      <div className="track-info" style={{fontFamily:'Courier New'}}>
          <div >
            <img className="album_img" src={track.track.album.images[0].url} alt="album-cover"/>
          </div>
          <div className="right_box">
            <div  className="track_name"><h2>{track.track.name}</h2></div>
            <div className="artist_name" >
              {track.track.artists.map((artist:any, i:string) => (
                  <li key={i}>{artist.name}</li>
              ))}
            </div>
            <div className="album_name">
              <h3 >{track.track.album.name}</h3>
            </div>
          </div>
        </div>

    </Content>
  </Wrapper>
  </>
  )
};

export default Playlist;
