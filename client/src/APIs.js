// API calls to Spotify using the accessToken from ./config
import { accessToken } from "./config";
import axios from 'axios'

axios.defaults.baseURL = 'https://api.spotify.com/v1';
axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
axios.defaults.headers['Content-Type'] = 'application/json';

export const getUser = () => axios.get('/me');

export const getPlaylists = (limit = 10) => {
    return axios.get(`/me/playlists?limit=${limit}`);
};

export const getTracks = (playlist_id) => {
    return axios.get(`/playlists/${playlist_id}`)
};

export const getTopArtists = () => {
    const artists = axios.get(`/me/top/artists`)
    return artists
};

export const getRelatedArtists = async() => {
    const topArtist = await axios.get(`/me/top/artists?limit=1`)
    const id = topArtist.data.items[0].id
    const relatedArtists = await axios.get(`/artists/${id}/related-artists`)
    const relatedArtistsArray = relatedArtists.data.artists
    return relatedArtistsArray
}