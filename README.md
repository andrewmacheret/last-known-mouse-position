# last-known-mouse-position

A webpage that tracks and shows your current mouse position using [jQuery](https://jquery.com/) and [Highmaps](http://www.highcharts.com/products/highcharts). Not very useful. Not very pretty.

See it running at [http://andrewmacheret.com/projects/last-known-mouse-position](http://andrewmacheret.com/projects/last-known-mouse-position).

Prereqs:
* A web server (like [Apache](https://httpd.apache.org/)).

Installation steps:
* `git clone <clone url>`

Test it:
* Open `index.html` in a browser.
 * For testing purposes, if you don't have a web server, running `python -m SimpleHTTPServer` in the project directory and navigating to [http://localhost:8000](http://localhost:8000) should do the trick.
* After loading, you should line chart showing the mouse's x and y positions over time. On mobile, this is the last touch position.
* To troubleshoot, look for javascript errors in the browser console.
