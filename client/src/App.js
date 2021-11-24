import { useState, useEffect } from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//stylesheet
import { GlobalStyle } from "./GlobalStyle"

//components
import Home from "./components/Home/index"
import Login from "./components/Login"
import Tracks from "./components/Tracks/Tracks"
import Playlists from "./components/PlaylistsPage/Playlists"
import ArtistPage from "./components/ArtistPage/ArtistPage"
import AlbumPage from "./components/AlbumPage/AlbumPage"
import Search from "./components/Search/Search"

import { accessToken } from "./config"

// const code = new URLSearchParams(window.location.search).get('code')
const App = () => {
    const [access, setAccess] = useState([])

    useEffect(() => {
        setAccess(accessToken)
            // console.log(accessToken, "ACCESS token received")
    }, [access])

    return ( 
      <Router> {
            access && access.length ? ( <Switch>
                <Route path = "/playlist/:id">
                <Tracks />
                </Route>  <Route path = "/search">
                <Search code = { accessToken }
                /> </Route > <Route path = "/playlists">
                <Playlists/>
                </Route> <Route path = "/album/:id" ><AlbumPage accessToken = { accessToken }
                /> </Route > < Route path = "/artist/:id" > <ArtistPage />
                </Route> <Route path = "/"> <Home code = { accessToken }
                /> </Route > </Switch >
            ) : ( < Login /> )
        }

        <GlobalStyle />
        </Router>
    );
};
export default App;