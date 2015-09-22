# Swiper

Work-in-progress Chrome extension for emulating credit card swipes

## Usage

This is an extension for working with Chromium apps that use hardware card readers set up as keyboard input. The Chromium app likely uses a plugin which detects input from these devices and pattern-matches to tracking codes, then triggers an event. This can be simulated without the hardware and in a normal browser by manually triggering the corresponding keypress events of a tracking code, which is how this extension works.

This is an unpublished extension, you will need to install it manually. Clone the repo or download, enable "Developer mode" on the Chrome extensions page, then select "Load unpacked extension".

This will add a credit card icon to your navigation bar. Clicking this icon will inject a function into the host page which you can execute via the browser console to emulate credit card swipes.

The interface is like this:

```
emulateCardSwipe(trackingCode, jquerySelector, jqueryInstance);
```

So you can do, for example:

```
emulateCardSwipe('whatever your tracking code is', window, $);
```
