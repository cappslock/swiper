function emulateCardSwipe (track, containerSelector, $) {
    track.split('').forEach(function (char) {
        var event = $.Event("keypress", {which: char.charCodeAt(0)});
        $(containerSelector).trigger(event);
    });
}
