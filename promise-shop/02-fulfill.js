'use strict';

var p = new Promise((fulfill, reject) => {
    // inside executor
    setTimeout(function() {
        fulfill('FULFILLED!');
    }, 300);
}).then(console.log);
