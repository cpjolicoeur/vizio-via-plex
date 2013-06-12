var PlexSnippetView = new KONtx.Class({
  ClassName: 'PlexSnippetView',
  Extends: KONtx.system.AnchorSnippetView,
  creatView: function() {
    this.controls.text = new KONtx.element.Text({
      label: $_('media_player_snippet'),
      styles: {
        color: "#ffffff",
        fontSize: KONtx.utility.scale(20),
        vAlign: "center",
        hAlign: "center"
      },
    }).appendTo(this);
  },
});
