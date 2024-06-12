import Ship from "../src/ship"
import Gameboard from "../src/gameboard"
import Player from "../src/player"

const domMethods = ( function() {

    // TODO: create openLinkInNewTab onclick event
    const openLinkInNewTab = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
    }

    return { openLinkInNewTab }

})()

export default domMethods