# syno-audio-station

## What
This is a very basic project which allows to open Synology audio station in a standalone app.

## Prerequisites
- in your Synology web interface, configuration panel, applications portal, add `/audio` alias to Audio Station app.
- clone this repository.
- `npm install` or `yarn` in it.
- `yarn package:mac` to build macOS release. (or `yarn package:win` or `yarn package:linux`)
- for macOS, open `./release-builds/syno-audio-station-darwin-x64` in macOS Finder, then copy `syno-audio-station.app` to Applications.
- run it, authenticate, optionally remember your credentials, enjoy.
