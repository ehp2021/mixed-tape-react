import { useState, useEffect } from "react"

//components
import Sidebar from "../Sidebar"
import ImageCarousel from "../ImageCarousel/ImageCarousel"
import ProfileHeader from "../ProfileHeader"

//styles
import { Wrapper, Content, ImageWrapper, Image } from "./Home.styles"

import { getUser, getPlaylists, getTopArtists, getRelatedArtists } from "../../APIs"

type images = {
  height: number
  url: string
  width: number
}

type UserDataType = {
  country: string
  display_name: string
  email: string
  explicit_content: {
    filter_enabled: boolean
    filter_locked: boolean
  }
  external_urls: string
  followers: {
    href: any
    total: number
  }
  href: string
  id: string
  images: images[]
  product: string
  type: string
  uri: string
}

type PlaylistProp = {
  collaborative: boolean
  description: string

  external_urls: {
    spotify: string
  }
  followers: {
    href: any
    total: number
  }
  genres: string[]
  href: string
  id: string
  images: images[]
  name: string
  popularity: number
  type: string
  uri: string
  owner: {
    display_name: string
    external_urls: {
      spotify: string
    }
  }
  public: boolean
  snapshot_id: string
  tracks: {
    href: string
    items: any
    limit: number
    next: string
    offset: number
    previous: string
    total: number
  }
}

const Home = ({code}:string) => {
  const [topArtists, setTopArtists] = useState<PlaylistProp[]>([])
  const [relArtist, setRelArtist] = useState<any>([])
  console.log(code, "CODE")
  useEffect(() => {
    const getUserData = async () => {
      const userTopArtists = await getTopArtists()
      setTopArtists(userTopArtists.data.items)
      // console.log(userTopArtists.data.items, "userTopArtist")
      const suggestedArtist = await getRelatedArtists()
      // console.log(suggestedArtist)
      setRelArtist(suggestedArtist)

    }
    getUserData()
  }, [])



  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <ImageCarousel items={topArtists} heading={"Top Artists"} />
        <ImageCarousel items={relArtist} heading={"Suggested Artists"} />
      </Content>
    </Wrapper>
  )
}

export default Home
