import React, {useEffect,useState} from "react";
import {useParams, Link} from 'react-router-dom'
import { getArtistAlbums } from '../../APIs'
import Header from '../Sidebar'
import { Wrapper, Content, Card,Image, New_Wrapper } from "./ArtistPage.styles.js";


const ArtistPage=()=> {
  const {id} = useParams()
  const [albums,setAlbums] = useState([])
  const [name,setName] = useState(null)

  useEffect(()=>{
    const getUserData = async () => {
      const topAlbums = await getArtistAlbums(id);
      setAlbums(topAlbums)
      setName(topAlbums[0].artists[0].name)
      console.log(topAlbums,'TOP ALBUMS')

    }
    getUserData()
  },[])
  
    return (
        <Wrapper>
           <Header /> 

           <New_Wrapper>
              {albums ? <h2>{name}</h2> : "Top Albums"}
                
                
                <Content>
                
                {albums.map((album, i) => (
                <Card key={i}>
                    {album.images.length && album.images[0] && (
                        <div>
                        <Link to = {`/album/${album.id}`}><Image src={album.images[0].url} alt={album.name} /></Link>
                        </div>
                    )}
                    <h3>{album.name}</h3>
                </Card>
                ))}
                </Content>
                </New_Wrapper>
        </Wrapper>
        )
}

export default ArtistPage;