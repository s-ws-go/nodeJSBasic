// os모듈 : 운영체제에 대한 정보
const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.homedir());
console.log(os.hostname());
// console.log(os.cpus());
console.log(os.cpus().length);

// constants : 에러와 신호에 대한 정보
console.log(os.constants.errno.ECANCELED);
