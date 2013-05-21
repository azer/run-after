## run-after

Run a command after given time based on [english-time](http://github.com/azer/english-time).

Examples:

```bash
$ run git push origin master after 5 seconds
$ run play http://www.bwaaamp.net/airhorn.mp3 after 2 mins and 15 secs
$ run reboot after 2 weeks and 3d 7h
```

See [english-time](http://github.com/azer/english-time) for more examples and full reference of the supported time inputs.

Looking for a daemon more commands like Cron? Try: [shell-jobs](http://github.com/azer/shell-jobs)

## Install

```bash
$ npm install -g run-after
```

## Programmatical API

```js
runAfter = require('run-after')

runAfter('echo foo', '1w 3d 7h')
```

![](https://dl.dropboxusercontent.com/s/mdwr7wbgk9mqbjg/npmel_28.jpg)
