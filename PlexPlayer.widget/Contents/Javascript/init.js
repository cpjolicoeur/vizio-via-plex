include("Framework/kontx/1.3/src/all.js");

include("Javascript/core/api.js");

include ("Javascript/views/basicplayer.js");
include ("Javascript/views/sidebar.js");
include ("Javascript/views/plex-snippet.js");

KONtx.application.init({
  views: [
    { id: 'view-Main', viewClass: PlexSidebarView },
    { id: 'view-Player', viewClass: PlexPlayerView },
    { id: 'view-Settings', viewClass: KONtx.views.AboutBox },
    { id: 'snippet-main', viewClass: PlexSnippetView }
  ],
  defaultViewId: 'view-Main',
  settingsViewId: 'view-Settings'
});

EventHandlers.onApplicationStartup.subscribeTo(
  KONtx.application, ['onApplicationStartup'], EventHandlers);
EventHandlers.onNetworkHideDialog.subscribeTo(
  KONtx.application, ['onNetworkHideDialog'], EventHandlers);
EventHandlers.handlerPlayerEvent.subscribeTo(
  KONtx.mediaplayer, ['onStateChange'], EventHandlers);
