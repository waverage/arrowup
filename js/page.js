var arrowEl = document.createElement('div');
arrowEl.id = "extArrowUp";
arrowEl.className = "";
$(arrowEl).css("background", "url(" + chrome.extension.getURL("") + ") center");
var pageYLabel = 0;

document.body.appendChild(arrowEl);

window.onscroll = function() {
    var pageY = window.pageYOffset || document.documentElement.scrollTop;
    var innerHeight = document.documentElement.clientHeight;

    switch (arrowEl.className) {
        case '':
          if (pageY > innerHeight) {
            arrowEl.className = 'up';
            $(arrowEl).css("background", "url(" + chrome.extension.getURL("icons/icon48.png") + ") center");
          }
          break;

        case 'up':
          if (pageY < innerHeight) {
            arrowEl.className = '';
            $(arrowEl).css("background", "url(" + chrome.extension.getURL("") + ") center");
          }
          break;

        case 'down':
          if (pageY > innerHeight) {
            arrowEl.className = 'up';
            $(arrowEl).css("background", "url(" + chrome.extension.getURL("icons/icon48.png") + ") center");
          }
          break;
    }
};

$(arrowEl).click(function(e){
    var pageY = window.pageYOffset || document.documentElement.scrollTop;

    switch (arrowEl.className) {
        case 'up':
            pageYLabel = pageY;
            window.scrollTo(0, 0);
            arrowEl.className = 'down';
            $(arrowEl).css("background", "url(" + chrome.extension.getURL("icons/icon_down48.png") + ") center");
            break;

        case 'down':
            window.scrollTo(0, pageYLabel);
            $(arrowEl).css("background", "url(" + chrome.extension.getURL("icons/icon48.png") + ") center");
            arrowEl.className = 'up';
     }
});