'use strict';

/* global first, second, console */

first().then((secret) => {
//    console.log(secret);
    return second(secret).then((result) => {
        console.log(result);
    });
});

// As an alternative to the code above, ou could also do this:
// first().then(second).then(console.log);
