import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Header from '../Sidebar'
import {Wrapper, Content} from './Search.styles';
import SpotifyWebApi from "spotify-web-api-node";

import {getAccess} from '../../APIs'
import './Search.css';
import Player from '../Player/Player';
import TrackSearchResult from '../TrackSearchResult/TrackSearchResult'

type SearchResultsType={
  albumUrl:string
  artist: string
  title: string
  uri: string
}

const spotifyApi = new SpotifyWebApi({
    clientId: 'ac468ec84f8d4070843bb0ce3cfd5c95'
  })

const Search = ({code}:any) => {

    const accessToken = code
    const [search, setSearch] = useState<string>("");
    const [searchResults, setSearchResults] = useState<SearchResultsType[]>([]);
    const [playingTrack, setPlayingTrack] = useState<SearchResultsType>()

    function chooseTrack(track: SearchResultsType) {
        setPlayingTrack(track)
        // setSearch("")
        // setLyrics("")
      }
    
      useEffect(():any => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
      }, [accessToken])
    
      useEffect(():any => {
        if (!search) return setSearchResults([])
        if (!accessToken) return
    
        let cancel:boolean = false
        spotifyApi.searchTracks(search).then((res: any) => {
          if (cancel ) return
          setSearchResults(
            res.body.tracks.items.map((track:any) => {
              const smallestAlbumImage = track.album.images.reduce(
                (smallest: any, image: any) => {
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