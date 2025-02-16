import { Link } from "react-router-dom"

//components
import Loader from "../Loader/index"
import HeadingTitle from "../HeadingTitle/index"

//styles
import { Wrapper, Content, Card, Image } from "./Grid.styles.js"

type images = {
  height:number,
  url:string,
  width:number
}
type PlaylistProp = {
  external_urls: {
    spotify: string
  }
  followers: {
    href: any
    total: number
  }
  genres: string[]
  href: string
  id: string,
  images:images[],
  name:string,
  popularity:number,
  type:string,
  uri:string
}

type Props = {
  playlists:PlaylistProp,
  source:string
}

const Grid = ({ playlists, source }: any) => {
  // console.log(typeof playlists, "playlists")
  return (
    <Wrapper>
      {playlists 
      // && playlists.length 
      ? (
        <div>
          <HeadingTitle title={`Top ${source}s`} />

          <Content>
            {playlists.map((playlist: any, i: any) => (
              <Card key={i}>
                <Link
                  className="playlist_name"
                  to={`/${source}/${playlist.id}`}
                >
                  {playlist.images.length && playlist.images[0] && (
                    <div>
                      <Image src={playlist.images[0].url} alt={playlist.name} />
                    </div>
                  )}
                  <h3>{playlist.name}</h3>
                </Link>
              </Card>
            ))}
          </Content>
        </div>
      ) : (
        <Loader />
      )}
    </Wrapper>
  )
}

export default Grid
