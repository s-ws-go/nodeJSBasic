// 버퍼 : 데이터를 저장하는 메모리 단위
// 스트림 : 데이터를 한꺼번에 전달하지 않고 작은 단위의 버퍼로 나누어서 전달하는 방식

const fs = require('fs');
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
const data = [];

readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
  console.log('error :', err);
});
