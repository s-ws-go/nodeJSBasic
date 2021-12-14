// res.white 대신 html파일을 직접 읽어들여서 사용하는 방법
// async await로 fs 모듈을 사용해 파일 읽어들이고 try catch로 에러처리하기.

// HTTP 상태코드
// 브라우저는 서버의 상태코드를 보고 요청이 성공했는지 실패했는지를 판단한다.
// 200 : 성공 알림 -- (200 성공 201 작성됨)
// 300 : 리다이렉션(다른페이지로 이동) -- (301 영구이동 302 임시이동 304 수정되지않음. 요청의 응답으로 캐시 사용)
// 400 : 요청오류 -- (400 잘못된 요청 401 권한없음 403 금지됨 404 찾을 수 없음)
// 500 : 서버오류 -- (500 내부서버오류 502 불량게이트웨이 503 서비스를 사용할 수 없음)

const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile('./server2.html');
    res.writeHead(200, { contentType: 'text/html; charset=utf-8' });
    res.end(data);
  } catch (error) {
    console.error(error);
    res.writeHead(500, { contentType: 'text/html; charset=utf-8' });
    res.end(error.message);
  }
});

server.listen(8080, () => {
  console.log('8080에서 대기중');
});
