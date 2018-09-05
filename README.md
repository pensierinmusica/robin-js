# Robin JS

[![build status](https://img.shields.io/travis/pensierinmusica/robin-js.svg)](https://travis-ci.com/pensierinmusica/robin-js)
[![dependencies](https://img.shields.io/david/pensierinmusica/robin-js.svg)](https://www.npmjs.com/package/robin-js)
[![npm version](https://img.shields.io/npm/v/robin-js.svg)](https://www.npmjs.com/package/robin-js)
[![license](https://img.shields.io/github/license/pensierinmusica/robin-js.svg)](https://www.npmjs.com/package/robin-js)

Robin JS is a JavaScript utility to calculate round-robin pairs from a list of participants.

It can be used directly in the browser, as a ES6 module, or as a CommonJS module in Node.

## Installation

`npm i robin-js`

## Usage

`pairsCalc(participants, [opts])`

- `participants` (*Number, or Array of strings*): the number of participants or an array that contains their names.
- `opts` (*Object, optional*)
  - `randomStart` (*Boolean*): whether the pairing logic should start from the first participant or a random one (defaults to false).
  - `rounds` (*Number, positive integer*): the number of rounds required (defaults to a full round-robin).

Returns an array containing all the rounds. Each round is an array containing all the pairs. Each pair is an array containing the members.

If the number of participants is odd, at each round one different player will be alone (i.e. free / not paired).

## Examples

```js
import pairsCalc from 'robin-js';  // ES6
const pairsCalc = require('robin-js'); // CJS

pairsCalc(4);
// [ [ [ 1, 3 ], [ 2, 4 ] ],
//   [ [ 1, 2 ], [ 4, 3 ] ],
//   [ [ 1, 4 ], [ 3, 2 ] ] ]

pairsCalc(['Tom', 'Lucy', 'Hannah']);
// [ [ [ 'Lucy' ], [ 'Tom', 'Hannah' ] ],
//   [ [ 'Tom' ], [ 'Hannah', 'Lucy' ] ],
//   [ [ 'Hannah' ], [ 'Lucy', 'Tom' ] ] ]
```

---

MIT License
