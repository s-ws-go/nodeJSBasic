// url : 인터넷 주소를 조작할 수 있도록 도와주는 모듈
// url 은 1) 기존노드방식 2) 노드7에서 추가된 WHATWG 방식이 있음.

const url = require('url');

const { URL } = url;
// 1) 모듈 안의 URL 생성자로 만드는게 WHATWG 방식임. 콘솔에 username과 password, searchParams 등 고유 특징이 들어가 있음.
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));

console.log('------------------------------');
// 2)
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));

// 기존 노드는 parse, format 두 가지 방식이 있음.
//parse 결과 보면 (유저네임, pw대신) auth, (서치파람스 대신)query 속성이 있음을 확인 가능

// host 없이 pathname만 오는 주소의 경우는 기존 노드로만 처리 가능 함.
