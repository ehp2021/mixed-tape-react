import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom'
import { getAlbumTracks, getAlbumInfo } from '../../APIs'
import Header from '../Sidebar'
import { Wrapper, Content, Card, Image, New_Wrapper } from "./AlbumPage.styles";
import './AlbumPage.css';
import Player from '../Player/Player';

const AlbumPage = ({accessToken}) => {
    const { id } = useParams()
    const [tracks, setTracks] = useState([])
    const [album, setAlbum] = useState('')
    const [playingTrack,setPlayingTrack] = useState();


    const handleChange =(track)=>{
      setPlayingTrack(track)
    }

    useEffect(() => {
        const getUserData = async() => {
            const Tracks = await getAlbumTracks(id);
            const AlbumInfo = await getAlbumInfo(id)
            setTracks(Tracks.data.items)
            setAlbum(AlbumInfo.data)

            // console.log(AlbumInfo.data, "TRAX")
        }
        getUserData()
    }, [])

    function makeTime(ms) { // 238000
        let finalTime;
        const minutes = Math.floor(ms / 1000 / 60); // 3
        const seconds = Math.round((ms / 1000 - (minutes * 60)), 2); //
        // console.log(seconds);
        if (seconds.toString().length < 2) {
            const newSeconds = seconds + '0';
            finalTime = minutes + ":" + newSeconds;
        } else {
            finalTime = minutes + ":" + seconds;
        }
        return finalTime;

    }

    return ( 
      <Wrapper>
        <Header/>
          <New_Wrapper> 
            { /* <div className="artist-name">{tracks[0].artists[0].name}</div> */ } { /* {album ? <Image src={album.images[1].url}/> : null} */ } {
              album ? < div className = 'album-cover'
              style = {
                { backgroundImage: `url(${album.images[1].url})` }
              } > 
            </div>: null} 
            <div style = { { alignSelf: "center", fontSize: "15px" } } > 
              Release Date: { album ? album.release_date : "" } 
              </div> 
              {
                tracks.map((track, i) => {
                return ( 
                  < Content >
                    <li onClick ={()=>handleChange(track)}
                    style={{cursor:'pointer'}}
                    >
                    <div className = "track-info"
                      key = { i } >
                      <div className = "track-number" > { track.track_number } </div>  
                      <div className = "track-name" > { track.name } </div>  
                      <div className = "track-duration" > { makeTime(track.duration_ms) } </div>
                    </div> </li> 
                    
                  </Content>
                )
            })
          }
            <div className="player-container-album">
              <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
            </div>
        </New_Wrapper>  

    </Wrapper >
)
}

export default AlbumPage;