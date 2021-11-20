import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getTracks } from "../../APIs";

//components
import Form from "../Form";
import Sidebar from "../Sidebar";
import Playlist from "../Playlist";
import Text from "../Text/index";
import Hero from "../Hero";
import Loader from "../Loader";

//styles
import { Wrapper, Content } from "./Tracks.styles";

type trackType = {
  added_at: string;
  added_by: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: false;
  primary_color: any;
  track: any;
  video_thumbnail: any;
};

type TrackDataType = {
    href:string
    items:any
    limit:number
    next:any
    offset:number
    previous:any
    total:number
}

type TextType = {
  content: string
  trackId: string
  __v:number
  _id:string
}



const Tracks = () => {
  const { id }: { id: string } = useParams();
  const [playlistData, setPlaylistData] = useState<any>(null);
  const [tracksData, setTracksData] = useState<TrackDataType>();
  const [tracks, setTracks] = useState<trackType[]>([]);
  const [texts, setTexts] = useState<TextType[]>([]);

  // console.log(tracks, "***tracks***", tracksData, texts, "tracks.tsx");

  const getAllText = async () => {
    await fetch("http://localhost:3001/tracks")
      .then((res) => res.json())
      .then((data) => setTexts(data));
  };

  const createText = async (newText: string) => {
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newText),
    };
    await fetch("http://localhost:3001/tracks", request)
      .then((res) => res.json())
      .then((text) => setTexts((textList: any) => [...textList, text]));
    getAllText();
  };

  useEffect(() => {
    getAllText();
  }, []);

  //get the playlist Object with track data etc.
  useEffect(() => {
    const getPlaylistData = async () => {
      const playlist = await getTracks(id);
      console.log(playlist);
      setPlaylistData(playlist.data);
      setTracksData(playlist.data.tracks);
    };
    getPlaylistData();
  }, [id]);

  //get track listing and next set of tracks
  useEffect(() => {
    if (!tracksData) {
      return;
    }
    const getMoreTracks = async () => {
      if (tracksData.next) {
        const nextTracks = await axios.get(tracksData.next);
        setTracksData(nextTracks.data);
      }
    };
    setTracks((tracks: any) => [
      ...(tracks ? tracks : []),
      ...tracksData.items,
    ]);
    getMoreTracks();
  }, [tracksData]);

  return (
    <Wrapper>
      <Sidebar />
      {tracksData ? (
        <div className="main-container">
          <Hero source={playlistData.images[0].url} playlists={playlistData} />
          <Content>
            {tracksData.items.map((track: any, i: string) => (
              <li key={i}>
                <div className="list_item">
                  <Playlist track={track} />
                  {texts ? (
                    <>
                      {texts.map((text: any) =>
                        text.trackId === track.track.id ? (
                          <Text text={text.content} />
                        ) : null
                      )}
                    </>
                  ) : null}
                  <Form onSubmit={createText} trackId={track.track.id} />
                </div>
              </li>
            ))}
          </Content>
        </div>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};

export default Tracks;
