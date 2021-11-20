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

import { accessToken } from "./config"

const App = () => {
    const [access, setAccess] = useState([])

    useEffect(() => {
        setAccess(accessToken)
    }, [access])

    return (
      <Router>
        {access && access.length ? (
          <Switch>
            <Route path="/playlist/:id">
              <Tracks />
            </Route>
            <Route path="/search" />
            <Route path="/playlists">
              <Playlists />
            </Route>
            <Route path="/artist/:id">
              <ArtistPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        ) : (
          <Login />
        )}
  
        <GlobalStyle />
      </Router>
    );
  };
  export default App;