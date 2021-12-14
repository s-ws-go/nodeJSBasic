const fs = require('fs').promises;

// fs.readdir(경로, 콜백) 폴더안의 내용물 확인. 배열 안에 내부파일 목록이 텍스트로 나옴
// fs.unlink(경로, 콜백) 파일을 지울수가 있다.
// fs.rmdir(경로, 콜백) 폴더를 지울수가 있다.
//

fs.readdir('./folder')
  .then((dir) => {
    console.log('폴더 내용 확인', dir);
    return fs.unlink('./folder/newfile.js');
  })
  .then(() => {
    console.log('파일 삭제 성공');
    return fs.rmdir('./folder');
  })
  .then(() => {
    console.log('폴더 삭제 성공');
  })
  .catch((err) => {
    console.error(err);
  });
