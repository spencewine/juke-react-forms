import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import FilterableArtistContainer from './containers/FilterableArtistContainer';
import NewPlaylistContainer from './containers/NewPlaylistContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Songs from './components/Songs';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer} foo={'foo'}>
      <Route path="/albums" component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/playlists" component={NewPlaylistContainer} />
      <Route path="/playlists/:playlistId"  />
      <Route path="/artists" component={FilterableArtistContainer}/>
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="/artists/:artistId/albums" component={Albums} />
        <Route path="/artists/:artistId/songs" component={Songs} />
      </Route>
      <IndexRedirect to='/albums' />
    </Route>
  </Router>,
  document.getElementById('app')
);

//<Route path="/playlists" component={NewPlaylistContainer} />
// <Route path = "/playlists" component={NewPlaylist} />
