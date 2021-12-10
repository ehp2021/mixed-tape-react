# MIXED TAPE
Mixed Tape allows users to create shareable Spotify playlists with customized features and descriptions for each song (like a mixtape).

Check out our full demo video here: https://www.youtube.com/watch?v=WxTYlfg_0uU 

![screenshot](https://github.com/ehp2021/mixed-tape-react/blob/main/screenshot1.png)
![screenshot](https://github.com/ehp2021/mixed-tape-react/blob/main/screenshot2.png)

# Collaborators
- [Ayaan Namazi](https://github.com/namaziay)
- [Emily Park](https://github.com/ehp2021)
- [Joao Felipe Silveira](https://github.com/accessjoao)

## Installation

- This app can be forked and run locally by implementing the .env.example file as the root .env file, with the correct port numbers for your client and server ports. You will also need a Spotify Developer account setup so that you can create your own Spotify Client Id and Secret. And finally, you will need to implement a MongoDB connection.

## How it works

This is app is built using React with Styled Components, and served in Express/Node.js with a database on MongoDB Atlas controlled with Mongoose.  The app pulls data from Spotify and show a user's playlists, allowing customizations such as adding descriptions and saving the playlists in order to share them with other users.

## Some changes made from the original version

- Changed all existing components to Typescript
- Added new components: AlbumPage, ArtistPage, Search, TrackSearchResult
- Added new features: Search on Search page, Player on Search Page, Player on AlbumPage
- Added Suggested Artists on home page
- Within ArtistPage, make albums clickable -> tracks show up
- Added Carousel to Home page
- Changed CSS on most components, including Navbar, Playlists page
