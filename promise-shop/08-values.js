function attachTitle(text) {
    return 'DR. ' + text;
}

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);
