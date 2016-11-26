'use strict';

/* global console */

var p = new Promise((fulfill, reject) => {
    // inside executor
    setTimeout(function() {
        reject(new Error('REJECTED!'));
    }, 300);
});

function onReject(error) {
    console.log(error.message);
}

p.then(null, onReject);
