import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import './Player.css';

export default function Player({ accessToken, trackUri }:any) {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

    if (!accessToken) return null
    return ( <
        SpotifyPlayer token = { accessToken }
        showSaveIcon callback = {
            state => {
                if (!state.isPlaying) setPlay(false)
            }
        }
        play = { play }
        uris = { trackUri ? [trackUri] : [] }
        />
    )
}