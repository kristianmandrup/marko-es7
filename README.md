marko-es7 [![NPM version](https://badge.fury.io/js/marko-es7.svg)](https://npmjs.org/package/marko-es7) [![Build Status](https://travis-ci.org//marko-es7.svg?branch=master)](https://travis-ci.org//marko-es7) [![Dependency Status](https://david-dm.org//marko-es7.svg?theme=shields.io)](https://david-dm.org//marko-es7) [![Coverage percentage](https://coveralls.io/repos//marko-es7/badge.svg)](https://coveralls.io/r//marko-es7)
==========================================================================================================================================================================================================================================================================================================================================================================================================================================

> Marko tags using ES2015 Classes and ES2015 decorators!

From discussion in [Marko issue #91](https://github.com/marko-js/marko-widgets/issues/91#issuecomment-140222488)

Install
-------

```sh
$ npm install --save marko-es7
```

This project was generated via [generator-node](https://github.com/yeoman/generator-node/)

Usage
-----

*WIP: Experimental*

```js
var markoEs7 = require('marko-es7');
markoEs7('Rainbow');
```

Test
----

Compile:

`gulp babel`

Run tests with `mocha` using `/dist` folder:

`npm run mocha`

Note: The original project setup uses `npm test` via gulp. However I've not been able to make it work with ES2016 generators, even after following these Babel config instructions [here](http://www.mikeobrien.net/blog/).

Any help or assistance greatly appreciated!!

License
-------

ISC © [Kristian Mandrup](https://github.com/kristianmandrup)
