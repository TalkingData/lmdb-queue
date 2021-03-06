"use strict";

var LmdbQueue = require('../'),
    Consumer = LmdbQueue.Consumer;

var consumer = new Consumer({ path: __dirname + '/test-data', topic: 'test', name: 'test', dataType: LmdbQueue.STRING_TYPE, chunkSize: 64 * 1024 * 1024, batchSize: 1024 * 16 }),
    start = Date.now();

console.log('Begin read queue.');

var cnt = 0;
while (consumer.pop()) {
    cnt++;
}

console.log('Read %d messages in %d ms', cnt, Date.now() - start);