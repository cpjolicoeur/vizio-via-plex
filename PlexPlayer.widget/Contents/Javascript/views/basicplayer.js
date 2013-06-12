var PlexPlayerView = new KONtx.Class({
  ClassName: 'PlexPlayerView',
  Extends: KONtx.system.FullscreenView,

  initView: function() {

  },

  createView: function() {
  },

  focusView: function() {
    this.controls.overlay.focus();
  },

  updateView: function() {
    this._registerHandlers();
    this._resetViewport();
    this._handlePlaylistUpdate(this.persist.PlaylistID);
  },

  hideView: function() {
    this._unregisterHandlers();
  },

  _handlePlaylistUpdate: function(playlistID) {
    if (KONtx.mediaplayer.isPlaylistEntryActive) {
      if (!playlistID) {
        // we have no new playlist value, so just ignore
        return;
      }
      if (playlistID === KONtx.mediaplayer.playlist.get().PlaylistID) {
        // we are already playing this playlist, so just ignore
        return;
      }
    }

    // otherwise, start the new playlist
    this._startPlaylist(playlistID);
  },

  _startPlaylist: function(playlistID) {
    this.controls.overlay.resetState();

    KONtx.mediaplayer.playlist.set(this._createPlaylist(playlistID));

    KONtx.mediaplayer.setConnectionBandwidth(KONtx.messages.fetch("bandwidth") || 1);
    KONtx.mediaplayer.playlist.start();
  },

  _createPlaylist: function(playlistID) {
    var playlist = new KONtx.media.Playlist();
    playlist.PlaylistID = playlistID;

    var json = KONtx.messages.fetch("playlist."+playlistID);
    for each(var entry in json.entries) {
      var playlistEntry = new KONtx.media.PlaylistEntry(entry);
      playlistEntry.entryID = entry.entryID;
      playlist.addEntry(playlistEntry);
    }

    return playlist;
  },

  _resetViewport: function() {
    var bounds = KONtx.mediaplayer.getDefaultViewportBounds();
    KONtx.mediaplayer.setViewportBounds(bounds);
  },
});
