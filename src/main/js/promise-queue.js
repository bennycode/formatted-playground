const PQueue = require('p-queue');
const queue = new PQueue({concurrency: 1});

// Thunked Promises:
const myPromises = [
  () => new Promise((resolve) => setTimeout(() => {
    resolve('A (slow)');
    console.log('A (slow)');
  }, 1000)),
  () => new Promise((resolve) => setTimeout(() => {
    resolve('B (slower)');
    console.log('B (slower)');
  }, 2000)),
  () => new Promise((resolve) => setTimeout(() => {
    resolve('C (fast)');
    console.log('C (fast)');
  }, 10))
];

queue.addAll(myPromises).then(console.log);
