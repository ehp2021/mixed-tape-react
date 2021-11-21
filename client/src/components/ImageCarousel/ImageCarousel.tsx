//components
import Loader from "../Loader";
import HeadingTitle from "../HeadingTitle/index";
import { useHistory } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';

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

// const breakPoints = [
//   {width: 1, itemsToShow:1},
//   {width: 550, itemsToShow:2},
//   {width: 760, itemsToShow:3},
//   {width: 1250, itemsToShow:4},
// ]

export default function ImageCarousel({ items, heading }: Props) {
  let history = useHistory ();

  const clickHandler = (id: string)=> {
    history.push(`/artist/${id}`);
  }

  // console.log(items.length, "LENGTH")

  return (
    <Wrapper>
      {items && items.length ? (
        <>
          <HeadingTitle title={`${heading}`} />
          <Content>
          <Carousel isRTL={false} 

            enableAutoPlay={true} 
            itemsToShow={3}>
            {items.map((item, i) => (
              <Card key={i} className="image_carousel_container">
                
                {item.images[0] && (
                  <div>
                    <Image className="carousel_image" src={item.images[0].url} onClick ={()=> clickHandler(item.id)}/>
                    {/* <h3 className="item_name">{item.name}</h3> */}
                  </div>
                )}
                
              </Card>
            ))}
          </Carousel>
           
          </Content>
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  )
}
