import React, {useEffect,useState} from "react";
import {useParams} from 'react-router-dom'
import { getArtistAlbums } from '../../APIs'
import Header from '../Sidebar'
import { Wrapper, Content, Card,Image } from "./ArtistPage.styles.js";

const ArtistPage=()=> {
  const {id} = useParams()
  const [albums,setAlbums] = useState([])
  const [name,setName] = useState(null)

  useEffect(()=>{
    const getUserData = async () => {
      const topAlbums = await getArtistAlbums(id);
      setAlbums(topAlbums)
      setName(topAlbums[0].artists[0].name)
      console.log(albums)

    }
    getUserData()
  },[])
    return (
        <div>
        <Header /> 
            <Wrapper>
                
                {albums ? <h2>{name}</h2> : "Top Albums"}
                
                <Content>
                
                {albums.map((album, i) => (
                <Card key={i}>
                    {album.images.length && album.images[0] && (
                        <div>
                        <Image src={album.images[0].url} alt={album.name} />
                        </div>
                    )}
                    <h3>{album.name}</h3>
                </Card>
                ))}
            </Content>
            </Wrapper>
        </div>
        )
}

export default ArtistPage;