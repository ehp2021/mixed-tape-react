import React from "react"
import './TrackSearchResult.css'


type TrackType = {
    albumUrl:string
    artist: string
    title: string
    uri: string
}

export default function TrackSearchResult({ track, chooseTrack }:{track: TrackType, chooseTrack:any} ) {

    function handlePlay():void {
        chooseTrack(track)
    }

    return ( 
    <div className = "d-flex m-2 align-items-center"
        style = {
            { cursor: "pointer" } }
        onClick = { handlePlay } >
        <img src = { track.albumUrl }
        style = {
            { height: "64px", width: "64px" } }
            /> 
        <div className = "ml-3" >
            <div className = 'font' style={{fontFamily:'Courier New'}}> { track.title } </div>
            <div className = "text-muted font" style={{fontWeight: '900'}} > { track.artist } </div> 
        </div>
    </div>
    )
}