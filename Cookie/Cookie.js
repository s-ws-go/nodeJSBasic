const http = require('http');

http
  .createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    console.log(req.url);
    console.log(req.headers);
    console.log(req.method);
    console.log('----------------------------------');
    console.log(res.writeHead);

    res.writeHead(200, { 'Set-Cookie': 'mycookie=test22222' });
    res.end('Hello Cookie');
  })
  .listen(8083, () => {
    console.log('8083 포트에서 사용 중입니다.');
  });
