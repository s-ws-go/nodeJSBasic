const http = require('http');

http
  // whitehead : 응답에 대한 정보 제공
  // write : 클라이언트로 보낼 데이터
  // end : 응답을 종료하는 것. 인수로 넣은 데이터를 보내고 응답 종료함
  .createServer((req, res) => {
    // console.log(res);
    res.writeHead(200, { contentType: 'text/html; charset=utf-8' });
    res.write('<h1>hello Node!</h1>');
    res.end('<p>hello server!</p>');
  })
  .listen(8080, () => {
    //서버 연결
    console.log('8080서버에서 대기중');
  });
