'use strict';

/* global getPromise1, getPromise2, console */

function all(p1, p2) {

    return new Promise(function(fulfill, reject) {

        var counter = 0;
        var out = [];

        // Incrementor:
        function incr() {
            counter++;
            if (counter === 2) fulfill([p1, p2]);
        }

        // Increment counter when each promise is fulfilled:
        p1.then(incr);
        p2.then(incr);

    });
}

all(getPromise1(), getPromise2()).then(console.log);
