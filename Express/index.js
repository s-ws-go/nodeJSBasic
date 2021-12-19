const express = require('express');
console.log('NODEMON CHECKED!');
// 익스프레스에서 html로 응답할 땐 파일의 경로를 path 모듈을 사용해서 지정한다.
const path = require('path');

const app = express();

// 서버가 실행될 포트를 설정한다(app.set)
app.set('port', process.env.PORT || 3030);

// 미들웨어 __ next : 다음 미들웨어로 넘어가는 함수임
app.use((req, res, next) => {
  console.log('모든 요청에 다 실행된다.');
  next();
});

// 주소에 대한 GET 요청이 올 떄 어떤 동작을 할지 적어준다()
// res.write 나 res.end 대신 사용한다.
app.get(
  '/',
  (req, res, next) => {
    console.log('get요청에서만 실행된다.');
    next();
  },
  (req, res) => {
    throw new Error('에러는 에러처리 미들웨어로');
  }
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

// html 파일 get 요청시 전송하고 싶은 경우(미들웨어 없이 작성되었던 코드)
// app.get('/', (req, res) => {
//   // res.send('response SEND!!');
//   res.sendFile(path.join(__dirname, './index.html'));
//   // console.log(res);
// });

app.listen(app.get('port'), () => {
  console.log('app.set("port")받아서 3030번 포트에서 대기중');
});
