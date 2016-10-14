# last-known-mouse-position

[![Build Status](https://travis-ci.org/andrewmacheret/last-known-mouse-position.svg?branch=master)](https://travis-ci.org/andrewmacheret/last-known-mouse-position) [![License](https://img.shields.io/badge/license-MIT-lightgray.svg)](https://github.com/andrewmacheret/last-known-mouse-position/blob/master/LICENSE.md)

A webpage that tracks and shows a graph of your current mouse position using [jQuery](https://jquery.com) and [Highmaps](https://www.highcharts.com/products/highcharts). Not very useful. Not very pretty.

See it running at [https://andrewmacheret.com/projects/last-known-mouse-position](https://andrewmacheret.com/projects/last-known-mouse-position).

Prereqs:
* A web server (like [Apache](https://httpd.apache.org)).

Installation steps:
* `git clone <clone url>`

Test it:
* Open `index.html` in a browser.
 * For testing purposes, if you don't have a web server, running `python -m SimpleHTTPServer` in the project directory and navigating to [http://localhost:8000](http://localhost:8000) should do the trick.
* After loading, you should line chart showing the mouse's x and y positions over time. On mobile, this is the last touch position.
* To troubleshoot, look for javascript errors in the browser console.

