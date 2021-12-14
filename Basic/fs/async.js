// 비동기 처리되는데(&& 블로킹? __ 함수가 바로 리턴되는지 여부. 블로킹은 바로 리턴되지 않고 백그라운드 작업이 끝나야 리턴됨) readFileSync를 사용하면 동기화 할 수있지만 성능면에서 비효율.
// 프로미스를 사용해 비동기처리하고 동기화시키도록 하자

const fs = require('fs');

console.log('시작');
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('2번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('3번', data.toString());
});
console.log('끝');
