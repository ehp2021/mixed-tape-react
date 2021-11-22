import { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import Header from '../Sidebar'
import {Wrapper} from './Search.styles';
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from "../TrackSearchResult/TrackSearchResult";
import {getAccess} from '../../APIs'



const spotifyApi = new SpotifyWebApi({
    clientId: 'ac468ec84f8d4070843bb0ce3cfd5c95'
  })

const Search = ({code}) => {

    const accessToken = code
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    function chooseTrack(track) {
        // setPlayingTrack(track)
        setSearch("")
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
        <div> 
            <Header /> 
            <Container> 
                <Form.Control 
                    type="search"
                    placeholder="Search Songs/Artists"
                    value={search} 
                    onChange={e => setSearch(e.target.value)}
                
                />
                <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                    {searchResults.map(track => (
                    <TrackSearchResult
                        track={track}
                        key={track.uri}
                        chooseTrack={chooseTrack}
                    />
                    ))}
                </div>
            </Container>
        </div>

    )

}; 

export default Search;