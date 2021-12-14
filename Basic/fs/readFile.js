const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});

// readFile의 결과는 Buffer 라는 형식으로 제공된다.
// Buffer는 메모리의 데이터라고 이해할 것
// 프로미스 기반으로 불러오면 편하다

const fsp = require('fs/promises');

fsp
  .readFile('./readme.txt')
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => console.log(err));
