const SpotifyWebApi = require("spotify-web-api-node")
const querystring = require('query-string');
const axios = require('axios');

const client_id = process.env.SPOTIFY_CLIENT_ID; // client id
const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // secret
const client_id = 'ac468ec84f8d4070843bb0ce3cfd5c95';
//process.env.SPOTIFY_CLIENT_ID; // client id
const client_secret = 'e35c37b3eb0f4fbfb45f71456255a6e7';
// process.env.SPOTIFY_CLIENT_SECRET; // secret
const redirect_uri = 'http://localhost:3001/callback';
// process.env.REDIRECT_URI; // redirect uri
const frontend_uri = 'http://localhost:3000';
// process.env.FRONTEND_URI;

const getRefreshToken = (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: redirect_uri,
        clientId: client_id,
        clientSecret: client_secret,
        refreshToken,
    })

    spotifyApi
        .refreshAccessToken()
        .then(data => {
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn,
            })
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
};

module.exports = { getRefreshToken };