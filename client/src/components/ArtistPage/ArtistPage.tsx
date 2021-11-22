import React, {useEffect,useState} from "react";
import {useParams, Link} from 'react-router-dom'
import { getArtistAlbums } from '../../APIs'
import Header from '../Sidebar'
import { Wrapper, Content, Card,Image, New_Wrapper } from "./ArtistPage.styles.js";

type TopAlbums = {
  album_group: string
  album_type: string
  artists: any
  available_markets: string[]
  external_urls: {spotify: string}
  href: string
  id: string
  images: any
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

const ArtistPage=()=> {
  const {id}:any = useParams()
  const [albums,setAlbums] = useState<TopAlbums[]>([])
  const [name,setName] = useState<string|null>(null)

  useEffect(()=>{
    const getUserData = async () => {
      const topAlbums = await getArtistAlbums(id);
      setAlbums(topAlbums)
      setName(topAlbums[0].artists[0].name)
    }
    getUserData()
  },[])
  
    return (
        <Wrapper>
           <Header /> 

           <New_Wrapper>
              {albums ? <h2>{name}</h2> : "Top Albums"}
                
                
                <Content>
                
                {albums.map((album: TopAlbums, i:number) => (
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