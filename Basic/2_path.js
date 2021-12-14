//path모듈 : 폴더와 파일의 경로를 쉽게 만들어 줌
const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename():', path.basename(string, path.extname(string)));
console.log('------------------------------');
// 파일 경로 파싱
console.log('path.parse()', path.parse(string));
console.log('------------------------------');
console.log(
  'path.format():',
  path.format({
    dir: 'C:\\users\\sws',
    name: 'path',
    ext: '.js',
  })
);
//구분기호 여러개일 떄 고쳐 줌
console.log('path.normalize():', path.normalize('C://users\\\\sws\\path.js'));
console.log('------------------------------');
// 절대 경로인지 확인
console.log('path.isAbsolute():', path.isAbsolute('C:\\'));
console.log('path.isAbsolute():', path.isAbsolute('./home'));
console.log('------------------------------');
//첫 번째에서 두 번쨰로 가는 방법
console.log('path.relative():', path.relative('C:\\users\\sws\\path.js', 'C:\\'));
// 여러 인수를 하나의 경로로 합쳐 줌
console.log(__dirname);
// --> 왼쪽부터 읽으면서 상대경로 만날때마다 함께 처리해줌 (아래 예시는 __dirname부터 시작, .. 두 번 처리하고 /users 경로 삽입)
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/sws'));
// --> 오른쪽부터 읽으면서 /로 시작하는 경로를 만나면 경로세팅 중단(?)

console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/sws'));
