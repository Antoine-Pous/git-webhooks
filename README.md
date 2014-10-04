Git[hub] Webhooks
============

After many search on NPM i haven't found what i need. This packet is really simple, he listen any Github webhooks on given port.

## Installation

```
npm install git-webhooks
```

## Usage

Display the payload data:

```javascript
var git = require('git-webhooks').onPort(9001);

git.on('push', function(payload) {
  console.log(payload);
});
```

Auto-sync FTP with Github repo:

```javascript
(coming soon)
```
