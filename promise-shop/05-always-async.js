'use strict';

/* global console */

var p = new Promise((fulfill, reject) => {
    // inside executor
    fulfill('PROMISE VALUE');
}).then(console.log);

console.log('MAIN PROGRAM');
