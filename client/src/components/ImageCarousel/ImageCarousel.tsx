//components
import Loader from "../Loader"
import HeadingTitle from "../HeadingTitle/index"

import { Wrapper, Content, Card, Image } from "./ImageCarousel.styles"

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
  items: PlaylistProp[]
  heading: string
}

export default function ImageCarousel({ items, heading }: Props) {
  return (
    <Wrapper>
      {items && items.length ? (
        <>
          <HeadingTitle title={`${heading}`} />
          <Content>
            {items.map((item, i) => (
              <Card key={i} className="image_carousel_container">
                {item.images[0] && (
                  <Image className="carousel_image" src={item.images[0].url} />
                )}
                <h3 className="item_name">{item.name}</h3>
              </Card>
            ))}
          </Content>
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  )
}
