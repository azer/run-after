## run-after

Run a command after given time based on [english-time](http://github.com/azer/english-time)

Examples:

```bash
$ run git push origin master after 5 seconds
$ run radio-paradise after an hour and 15 mins
$ run reboot after 2 weeks, 3d + 7h
```

See [english-time](http://github.com/azer/english-time) for more examples and full reference of the supported time inputs.

## Install

```bash
$ npm install run-after
```

## Programmatical API

```js
runAfter = require('run-after')

runAfter('echo foo', '1w 3d 7h').stdout.pipe(process.stdout);
```

![](https://dl.dropboxusercontent.com/s/mdwr7wbgk9mqbjg/npmel_28.jpg)
