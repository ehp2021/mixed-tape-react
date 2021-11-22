import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Header from '../Sidebar'
import {Wrapper, Content} from './Search.styles';
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from "../TrackSearchResult/TrackSearchResult";
import {getAccess} from '../../APIs'
import './Search.css';
import Player from '../Player/Player';



const spotifyApi = new SpotifyWebApi({
    clientId: 'ac468ec84f8d4070843bb0ce3cfd5c95'
  })

const Search = ({code}) => {

    const accessToken = code
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [playingTrack, setPlayingTrack] = useState()

    function chooseTrack(track) {
        setPlayingTrack(track)
        // setSearch("")
        // setLyrics("")
      }
    
      useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
      }, [accessToken])
    
      useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return
    
        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
          if (cancel) return
          setSearchResults(
            res.body.tracks.items.map(track => {
              const smallestAlbumImage = track.album.images.reduce(
                (smallest, image) => {
                  if (image.height < smallest.height) return image
                  return smallest
                },
                track.album.images[0]
              )
    
              return {
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: smallestAlbumImage.url,
              }
            })
          )
        })
    
        return () => (cancel = true)
      }, [search, accessToken])
   

    return (
        <Wrapper> 
         
            <Header /> 
            
            <Content>
              <div className="search-form-container">
                <div className="search-icon">
                  <i className="fas fa-search"></i>
                </div>
                    <Form.Control 
                   
                        className="search-form"
                        type="search"
                        placeholder={`Search Songs/Artists`}
                        value={search} 
                        onChange={e => setSearch(e.target.value)}
                        style={{fontFamily:'Courier New'}}
                    
                    /> 
              </div>
                    <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                        {searchResults.map(track => (
                        <TrackSearchResult
                            track={track}
                            key={track.uri}
                            chooseTrack={chooseTrack}
                        />
                        ))}
                    </div>

                    <div className="player-container">
                      <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
                    </div>
            </Content>
        </Wrapper>

    )

}; 

export default Search;