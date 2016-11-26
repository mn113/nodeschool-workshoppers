'use strict';

/* global console */

var p = new Promise((fulfill, reject) => {
    // inside executor
    fulfill('I FIRED');
    reject (new Error('I DID NOT FIRE'));
});

function onRejected(error) {
    console.log(error.message);
}

// success & failure handlers:
p.then(console.log, onRejected);
