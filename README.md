## run-after

Run a command after given time based on [english-time](http://github.com/azer/english-time)

Examples:

```bash
$ run echo "hello world" after 5s
$ run radio-paradise after an hour and 15 minutes
$ run reboot after 2 weeks, 3 days and 7 hours
```

See [english-time](http://github.com/azer/english-time) for details.

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
