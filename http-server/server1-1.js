const http = require('http');

// creteServer 메서드를 여러개 쓰면 포트 여러개로 복수의 서버 오픈도 가능하다. 실무에선 잘 쓰지 않는 방법이다.
const server = http.createServer((req, res) => {
  res.writeHead(200, { contentType: 'text/html; charset=utf-8' });
  res.write('<h1>hello Node!</h1>');
  res.end('<p>hello server!</p>');
});
server.listen(8080);

server.on('listening', () => {
  console.log('8080에서 대기중');
});
server.on('error', (error) => {
  console.log(error);
});
