import React from "react"

//components
import HeroImage from "../HeroImage"

import { Wrapper, Content, Text } from "./Hero.styles.js"

type images = {
  height: number
  url: string
  width: number
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

type Props = {
  playlists: PlaylistProp
  source: string
}
const Hero = ({ source, playlists }: Props) => {
  console.log(source)
  return (
    <>
      <Wrapper>
        <Content>
          <HeroImage
            source={source}
            alt="playlist"
          />
          <Text>
            <h1>{playlists.name}</h1>
            <div className="bottom_text">
              <p className="display_name">{playlists.owner.display_name}</p>
              <p className="track_total">{`: ${playlists.tracks.total} songs`}</p>
            </div>
          </Text>
        </Content>
      </Wrapper>
    </>
  )
}

export default Hero
