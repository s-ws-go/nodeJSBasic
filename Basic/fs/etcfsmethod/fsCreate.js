const fs = require('fs').promises;
const constants = require('fs').constants;

// fs.access (경로, 옵션, 콜백) : 접근할 수 있는지 체크
// 두 번쨰 인수의 FOK 는 파일존재여부 WOK 는 쓰기권한여부 ROK 는 읽기권한여부
// 파일, 폴더가 없을때의 에러 코드는 'ENOENT' 임.

//fs.mkdir (경로, 콜백) : 폴더를 만드는 메서드
//fs.open (경로, 옵션, 콜백) : 파일의 아이디(fd)를 가져오는 메서드
// 옵션의 'w'는 만들기 'r'은 읽기 'a'는 기존파일에 추가
//fs.rename (기존경로, 새경로, 콜백) : 파일의 이름을 바꾸는 메서드

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
  .then(() => {
    return Promise.reject('이미 폴더 있음');
  })
  .catch((err) => {
    if (err.code === 'ENOENT') {
      console.log('폴더 없음');
      return fs.mkdir('./folder');
    }
    return Promise.reject(err);
  })
  .then(() => {
    console.log('폴더 만들기 성공');
    return fs.open('./folder/file.js', 'w');
  })
  .then((fd) => {
    console.log('빈 파일 만들기 성공', fd);
    return fs.rename('./folder/file.js', './folder/newfile.js');
  })
  .then(() => {
    console.log('이름 바꾸기 성공');
  })
  .catch((err) => {
    console.error(err);
  });
