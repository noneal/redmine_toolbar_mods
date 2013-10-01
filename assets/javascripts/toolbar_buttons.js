window.onload=function(){
  // add colour buttons to the edit toolbar
  var i = 0,
      buttons = ['THUMB', 'COLLAPSE', 'RED', 'BLUE', 'GREEN' ],
      button, lowerButton;

  if (typeof(jsToolBar) != "undefined") {
    for (i = 0; i < buttons.length; i += 1) {
      button = buttons[i];
      lowerButton = button.toLowerCase();
      jsToolBar.prototype.elements[lowerButton] = (function(lowerButton) {
        var thatbutton = lowerButton;
        if ( button == 'COLLAPSE' ) {
          return {
          type: 'button',
          title: button,
          fn: {
            wiki: function() {
              this.encloseSelection('{{collapse(Open...)\n', '\n}}');
              }
            }
          }
        }
        else if ( button == 'THUMB' ) {
          return {
          type: 'button',
          title: button,
          fn: {
            wiki: function() {
              this.encloseSelection('{{thumbnail(', ')}}');
              }
            }
          }
        }
        else {
          return {
          type: 'button',
          title: button,
          fn: {
            wiki: function() {
              this.encloseSelection('%{color:' + thatbutton + '} ', '%');
              }
            }
          }
        }
      }(lowerButton));
    }
    // redraw toolbar to get the new buttons to show
    wikiToolbar.draw();
  }
};
