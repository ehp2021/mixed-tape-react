import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom'
import { getAlbumTracks, getAlbumInfo } from '../../APIs'
import Header from '../Sidebar'
import { Wrapper, Content, Card, Image, New_Wrapper } from "./AlbumPage.styles";
import './AlbumPage.css';
import Player from '../Player/Player';

type TrackType = {
  artists: any
  available_markets: string[]
  disc_number: number,
  duration_ms: number,
  explicit: false
  external_urls: {spotify: string},
  href: string,
  is_local: boolean,
  name: string,
  preview_url: string,
  track_number: number,
  type: string,
  uri: string
}

type AlbumType ={
  album_type: string
  artists: any
  available_markets: string
  copyrights: any
  external_ids: {upc: string}
  external_urls: {spotify: string}
  genres: any
  href: any
  id: string
  images:any
  label: string
  name: string
  popularity: number,
  release_date: string
  release_date_precision: string
  total_tracks: number
  tracks: any
  type: string
  uri: string
}


const AlbumPage = ({accessToken}: any) => {
    const { id }:any = useParams<string | null>()
    const [tracks, setTracks] = useState<TrackType[]>([])
    const [album, setAlbum] = useState<AlbumType>()
    const [playingTrack,setPlayingTrack] = useState<any>();

    const handleChange =(track:any)=>{
      setPlayingTrack(track)
    }

    useEffect(() => {
        const getUserData = async() => {
            const Tracks:any = await getAlbumTracks(id);
            const AlbumInfo:any = await getAlbumInfo(id)
            setTracks(Tracks.data.items)
            setAlbum(AlbumInfo.data)

        }
        getUserData()
    }, [])

    function makeTime(ms: number) { 
        let finalTime: any;
        const minutes:number = Math.floor(ms / 1000 / 60); 
        const seconds:any = Math.round(ms / 1000 - (minutes * 60)).toFixed(2);

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
            {
              album ? < div className = 'album-cover'
              style = {
                { backgroundImage: `url(${album.images[1].url})` }
            } > 
            </div>: null} 
            <div style = { { alignSelf: "center", fontSize: "15px" } } > 
              Release Date: { album ? album.release_date : "" } 
              </div> 
              {
                tracks.map((track:TrackType, i:number) => {
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